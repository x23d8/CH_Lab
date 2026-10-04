import { createClient } from '@supabase/supabase-js';

function friendlyError(error) {
  const message = error?.message || String(error);
  if (/anonymous|signup|signups|disabled/i.test(message)) return 'Supabase chưa bật Anonymous Sign-Ins trong Auth Settings.';
  if (/Could not find the function|schema cache|404|hcm_join/i.test(message)) return 'Chưa cài migration SQL cho lớp học trên Supabase.';
  return message;
}

export function createSupabaseOnlineClient(url, key, onMessage, onStatus) {
  const supabase = createClient(url, key, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
  });
  let desiredName = '';
  let userId = null;
  let roomNo = null;
  let roomChannel = null;
  let globalChannel = null;
  let latestState = null;
  let peers = new Map();
  let presenceReady = false;
  let currentPose = { x: 4.6, z: 3.7, rotation: 0 };
  let lastPose = null;
  let lastPoseAt = 0;
  let heartbeatTimer = null;
  let pollTimer = null;
  let retryTimer = null;
  let refreshing = false;
  let joining = false;
  let stopped = false;
  let connected = false;
  let resettingChannels = false;
  let lastPresenceAt = 0;
  let reportedResultRound = null;
  let seatActionPending = false;

  async function rpc(functionName, args = {}) {
    const { data, error } = await supabase.rpc(functionName, args);
    if (error) throw error;
    return data;
  }

  function report(error) { onMessage({ type: 'error', message: friendlyError(error) }); }

  function roomPlayers() {
    if (!presenceReady) return latestState?.players || [];
    const databasePlayers = new Map((latestState?.players || []).map(player => [player.id, player]));
    const list = [...peers.values()].map(player => {
      const saved = databasePlayers.get(player.id);
      if (!saved) return player;
      if (player.id === userId || saved.seatId !== player.seatId) return saved;
      return { ...saved, x: player.x, z: player.z, rotation: player.rotation };
    });
    if (latestState?.me && !list.some(player => player.id === userId)) {
      const own = latestState.players.find(player => player.id === userId);
      if (own) list.push(own);
    }
    return list;
  }

  function emitPlayers() { onMessage({ type: 'players', players: roomPlayers() }); }

  function syncPresence() {
    if (!roomChannel) return;
    const next = new Map();
    for (const [id, metas] of Object.entries(roomChannel.presenceState())) {
      const meta = metas.at(-1);
      if (!meta || !meta.id) continue;
      const old = peers.get(id);
      next.set(id, {
        id: meta.id, name: meta.name, role: meta.role, seatId: meta.seatId ?? null,
        x: old && old.seatId === (meta.seatId ?? null) ? old.x : meta.x ?? 4.6,
        z: old && old.seatId === (meta.seatId ?? null) ? old.z : meta.z ?? 3.7,
        rotation: old && old.seatId === (meta.seatId ?? null) ? old.rotation : meta.rotation ?? 0,
      });
    }
    peers = next;
    presenceReady = true;
    if (connected) emitPlayers();
  }

  async function trackPresence() {
    if (!roomChannel || !latestState?.me || !connected) return;
    const me = latestState.me;
    const own = latestState.players.find(player => player.id === userId);
    if (own?.seatId !== null && own?.seatId !== undefined) currentPose = { x: own.x, z: own.z, rotation: own.rotation };
    await roomChannel.track({
      id: userId, name: me.name, role: me.role, seatId: me.seatId,
      x: currentPose.x, z: currentPose.z, rotation: currentPose.rotation,
    });
    lastPresenceAt = Date.now();
  }

  function consumeState(data, previousExam = latestState?.exam) {
    if (!data?.me || !data?.exam) return;
    if (latestState?.serverNow && data.serverNow < latestState.serverNow) return;
    latestState = data;
    onMessage({ ...data, type: 'state', players: roomPlayers() });
    if (data.exam.phase === 'active' && data.me.eligible && !data.me.submitted && data.questions?.length) {
      onMessage({ type: 'exam_open', round: data.exam.round, serverNow: data.serverNow,
        startedAt: data.exam.startedAt, endsAt: data.exam.endsAt, questions: data.questions });
    }
    if (data.me.submitted && reportedResultRound !== data.exam.round) {
      reportedResultRound = data.exam.round;
      onMessage({ type: 'exam_result', round: data.exam.round,
        row: data.exam.rankings.find(row => row.id === userId) });
    }
    if (previousExam?.phase === 'active' && data.exam.phase === 'finished') {
      onMessage({ type: 'exam_finished', round: data.exam.round, rankings: data.exam.rankings });
    }
  }

  async function refresh() {
    if (refreshing || !userId || stopped) return;
    refreshing = true;
    try { consumeState(await rpc('hcm_state')); }
    catch (error) {
      if (/hết hạn|vào lại/i.test(error.message || '')) scheduleRetry(1000);
      else report(error);
    } finally { refreshing = false; }
  }

  function broadcastGlobal() {
    globalChannel?.send({ type: 'broadcast', event: 'state-changed', payload: { at: Date.now() } });
  }

  function scheduleRetry(delay = 5000) {
    if (retryTimer || stopped) return;
    connected = false;
    onStatus('offline');
    retryTimer = window.setTimeout(() => { retryTimer = null; connect(desiredName); }, delay);
  }

  function subscribe(channel) {
    return new Promise((resolve, reject) => {
      let settled = false;
      const timer = window.setTimeout(() => { if (!settled) { settled = true; reject(new Error('Kết nối Realtime quá thời gian chờ.')); } }, 12000);
      channel.subscribe((status, error) => {
        if (status === 'SUBSCRIBED' && !settled) { settled = true; clearTimeout(timer); resolve(); }
        else if (['CHANNEL_ERROR', 'TIMED_OUT', 'CLOSED'].includes(status)) {
          if (!settled) { settled = true; clearTimeout(timer); reject(error || new Error('Kênh Realtime bị ngắt.')); }
          else if (!resettingChannels) scheduleRetry();
        }
      });
    });
  }

  async function ensureChannels(nextRoomNo) {
    if (roomNo !== nextRoomNo && roomChannel) {
      await supabase.removeChannel(roomChannel);
      roomChannel = null; peers = new Map(); presenceReady = false;
    }
    roomNo = nextRoomNo;
    if (!globalChannel) {
      globalChannel = supabase.channel('hcm-global', { config: { private: true } })
        .on('broadcast', { event: 'state-changed' }, () => refresh());
      await subscribe(globalChannel);
    }
    if (!roomChannel) {
      roomChannel = supabase.channel(`hcm-room-${roomNo}`, {
        config: { private: true, presence: { key: userId }, broadcast: { self: false } },
      })
        .on('presence', { event: 'sync' }, syncPresence)
        .on('broadcast', { event: 'pose' }, ({ payload }) => {
          const peer = peers.get(payload?.id);
          if (!peer || peer.seatId !== null || payload.id === userId || ![payload.x, payload.z, payload.rotation].every(Number.isFinite)) return;
          peer.x = payload.x; peer.z = payload.z; peer.rotation = payload.rotation;
          emitPlayers();
        })
        .on('broadcast', { event: 'seat-changed' }, () => refresh());
      await subscribe(roomChannel);
    }
  }

  async function resetChannels() {
    resettingChannels = true;
    const channels = [roomChannel, globalChannel].filter(Boolean);
    roomChannel = null; globalChannel = null; peers = new Map(); presenceReady = false;
    try { await Promise.allSettled(channels.map(channel => supabase.removeChannel(channel))); }
    finally { resettingChannels = false; }
  }

  function startIntervals() {
    clearInterval(heartbeatTimer); clearInterval(pollTimer);
    heartbeatTimer = window.setInterval(async () => {
      if (!userId || stopped) return;
      try {
        await rpc('hcm_touch', { p_x: currentPose.x, p_z: currentPose.z, p_rotation: currentPose.rotation });
        if (Date.now() - lastPresenceAt > 45000) await trackPresence();
      } catch (error) { report(error); scheduleRetry(); }
    }, 15000);
    pollTimer = window.setInterval(refresh, 4000);
  }

  async function connect(nextName) {
    desiredName = nextName.trim();
    if (!desiredName || joining || stopped) return;
    clearTimeout(retryTimer); retryTimer = null;
    joining = true;
    onStatus('connecting');
    try {
      if (!connected && (roomChannel || globalChannel)) await resetChannels();
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;
      let user = sessionData.session?.user;
      if (!user) {
        const { data, error } = await supabase.auth.signInAnonymously();
        if (error) throw error;
        user = data.user;
      }
      userId = user.id;
      const state = await rpc('hcm_join', { p_name: desiredName });
      const previousExam = latestState?.exam;
      latestState = state;
      await ensureChannels(state.me.roomNo);
      connected = true;
      await trackPresence();
      onStatus('online');
      onMessage({ type: 'welcome', id: userId, role: state.me.role, name: state.me.name,
        roomNo: state.me.roomNo, serverNow: state.serverNow, examMinutes: 15 });
      consumeState(state, previousExam);
      startIntervals();
      broadcastGlobal();
    } catch (error) {
      connected = false;
      await resetChannels();
      report(error);
      scheduleRetry();
    } finally { joining = false; }
  }

  async function performAction(message) {
    const seatAction = message.type === 'sit' || message.type === 'stand';
    if (seatAction && seatActionPending) return;
    if (seatAction) seatActionPending = true;
    try {
      if (seatAction) {
        // The database pose is refreshed every 15 seconds. Validate a seat against
        // the position at the moment the player asks to sit.
        if (message.type === 'sit' && latestState?.me?.seatId == null) {
          const pose = { ...currentPose };
          await rpc('hcm_touch', { p_x: pose.x, p_z: pose.z, p_rotation: pose.rotation });
        }
        const data = await rpc(message.type === 'sit' ? 'hcm_sit' : 'hcm_stand', message.type === 'sit' ? { p_seat: message.seatId } : {});
        const own = data.players.find(player => player.id === userId);
        if (own) currentPose = { x: own.x, z: own.z, rotation: own.rotation };
        consumeState(data);
        await trackPresence();
        roomChannel?.send({ type: 'broadcast', event: 'seat-changed', payload: {} });
        broadcastGlobal();
      } else if (message.type === 'start_exam' || message.type === 'finish_exam') {
        consumeState(await rpc(message.type === 'start_exam' ? 'hcm_start_exam' : 'hcm_finish_exam'));
        broadcastGlobal();
      } else if (message.type === 'submit_exam') {
        consumeState(await rpc('hcm_submit_exam', { p_answers: message.answers }));
        broadcastGlobal();
      }
    } catch (error) { report(error); }
    finally { if (seatAction) seatActionPending = false; }
  }

  function send(message) {
    if (message.type === 'pose') {
      if (![message.x, message.z, message.rotation].every(Number.isFinite)) return;
      currentPose = { x: message.x, z: message.z, rotation: message.rotation };
      const now = performance.now();
      const poseInterval = 125;
      if (!connected || !roomChannel || now - lastPoseAt < poseInterval) return;
      if (lastPose && Math.hypot(message.x - lastPose.x, message.z - lastPose.z) < .025 && Math.abs(message.rotation - lastPose.rotation) < .04) return;
      lastPose = currentPose; lastPoseAt = now;
      roomChannel.send({ type: 'broadcast', event: 'pose', payload: { id: userId, ...currentPose } });
    } else if (userId) performAction(message);
  }

  function stop() {
    stopped = true;
    connected = false;
    clearInterval(heartbeatTimer); clearInterval(pollTimer); clearTimeout(retryTimer);
    if (roomChannel) supabase.removeChannel(roomChannel);
    if (globalChannel) supabase.removeChannel(globalChannel);
    if (userId) supabase.rpc('hcm_leave');
  }

  return { connect, send, stop };
}
