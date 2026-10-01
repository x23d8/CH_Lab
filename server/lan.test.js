import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { randomUUID } from 'node:crypto';
import { WebSocket } from 'ws';
import { createLanServer } from './lan.js';
import { rankSubmissions, scoreAnswers } from './scoring.js';

test('chấm theo số câu đúng rồi thời gian hoàn thành', () => {
  assert.equal(scoreAnswers([1, 2, 0, 3, 2]), 5);
  assert.equal(scoreAnswers([0, 2, 0, 3, 2]), 4);
  const ranked = rankSubmissions([
    { id: 'b', name: 'B', correct: 4, durationMs: 2000, submittedAt: 2000 },
    { id: 'a', name: 'A', correct: 5, durationMs: 7000, submittedAt: 7000 },
    { id: 'c', name: 'C', correct: 4, durationMs: 1000, submittedAt: 1000 },
  ]);
  assert.deepEqual(ranked.map(row => row.id), ['a', 'c', 'b']);
});

test('hai sinh viên ngồi, giảng viên mở đề và máy chủ xếp hạng', async t => {
  const server = createLanServer({ host: '127.0.0.1', port: 0 });
  await once(server, 'listening');
  const port = server.address().port;
  const clients = [];
  t.after(async () => {
    clients.forEach(client => client.ws.close());
    await new Promise(resolve => server.close(resolve));
  });

  async function join(name) {
    const ws = new WebSocket(`ws://127.0.0.1:${port}`);
    await once(ws, 'open');
    const inbox = [];
    const waiters = [];
    ws.on('message', data => {
      const message = JSON.parse(data.toString());
      inbox.push(message);
      for (const waiter of [...waiters]) if (waiter.predicate(message)) { waiters.splice(waiters.indexOf(waiter), 1); waiter.resolve(message); }
    });
    const client = {
      ws,
      send: message => ws.send(JSON.stringify(message)),
      wait: (type, check = () => true) => {
        const existing = inbox.find(message => message.type === type && check(message));
        if (existing) return Promise.resolve(existing);
        return new Promise((resolve, reject) => {
          const waiter = { predicate: message => message.type === type && check(message), resolve };
          waiters.push(waiter);
          setTimeout(() => { const index = waiters.indexOf(waiter); if (index >= 0) { waiters.splice(index, 1); reject(new Error(`Timeout: ${type}`)); } }, 5000).unref();
        });
      },
    };
    clients.push(client);
    client.send({ type: 'hello', token: randomUUID(), name });
    client.identity = await client.wait('welcome');
    return client;
  }

  async function walkTo(client, targetX, targetZ) {
    let x = 4.6; let z = 3.7;
    while (Math.hypot(targetX - x, targetZ - z) > .01) {
      const dx = targetX - x; const dz = targetZ - z;
      const factor = Math.min(1, .43 / Math.hypot(dx, dz));
      x += dx * factor; z += dz * factor;
      client.send({ type: 'pose', x, z, rotation: Math.PI });
      await new Promise(resolve => setTimeout(resolve, 115));
    }
  }

  const teacher = await join('NHOM3HCM202AI1802');
  const first = await join('An');
  const second = await join('Bình');
  assert.equal(teacher.identity.role, 'teacher');
  assert.equal(teacher.identity.name, 'Giảng viên');

  first.send({ type: 'start_exam' });
  assert.match((await first.wait('error')).message, /Chỉ giảng viên/);

  await Promise.all([walkTo(first, 1.05, 4.75), walkTo(second, -2.35, 4.75)]);
  first.send({ type: 'sit', seatId: 8 });
  second.send({ type: 'sit', seatId: 7 });
  await teacher.wait('state', state => state.players.filter(player => player.seatId !== null).length === 2);
  teacher.send({ type: 'start_exam' });
  const [firstExam, secondExam] = await Promise.all([first.wait('exam_open'), second.wait('exam_open')]);
  assert.equal(firstExam.questions.length, 5);
  assert.equal(firstExam.questions[0].answer, undefined);
  assert.equal(secondExam.endsAt - secondExam.startedAt, 15 * 60_000);

  second.send({ type: 'submit_exam', answers: [0, 2, 0, 3, 2] });
  await second.wait('exam_result');
  first.send({ type: 'submit_exam', answers: [1, 2, 0, 3, 2] });
  const done = await teacher.wait('exam_finished');
  assert.equal(done.rankings[0].name, 'An');
  assert.equal(done.rankings[0].points, 100);
  assert.equal(done.rankings[1].name, 'Bình');
  assert.equal(done.rankings[1].points, 80);
});
