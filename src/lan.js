function createToken() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 15) | 64;
  bytes[8] = (bytes[8] & 63) | 128;
  const hex = [...bytes].map(value => value.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function createLanClient(onMessage, onStatus) {
  const token = sessionStorage.getItem('hcm202-lan-token') || createToken();
  sessionStorage.setItem('hcm202-lan-token', token);
  const port = import.meta.env.VITE_LAN_PORT || '5174';
  const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  const url = `${protocol}//${location.hostname}:${port}`;
  let socket = null;
  let name = '';
  let reconnectTimer = null;
  let closed = false;

  function send(payload) {
    if (socket?.readyState === WebSocket.OPEN) socket.send(JSON.stringify(payload));
  }

  function connect(nextName) {
    name = nextName.trim();
    if (!name) return;
    closed = false;
    if (socket?.readyState === WebSocket.OPEN) { send({ type: 'hello', token, name }); return; }
    if (socket?.readyState === WebSocket.CONNECTING) return;
    clearTimeout(reconnectTimer);
    onStatus('connecting');
    socket = new WebSocket(url);
    socket.addEventListener('open', () => { onStatus('online'); send({ type: 'hello', token, name }); });
    socket.addEventListener('message', event => {
      try { onMessage(JSON.parse(event.data)); } catch { /* Ignore malformed messages. */ }
    });
    socket.addEventListener('close', () => {
      socket = null;
      onStatus('offline');
      if (!closed) reconnectTimer = window.setTimeout(() => connect(name), 3000);
    });
    socket.addEventListener('error', () => { onStatus('offline'); });
  }

  function stop() {
    closed = true;
    clearTimeout(reconnectTimer);
    socket?.close();
  }

  return { connect, send, stop };
}
