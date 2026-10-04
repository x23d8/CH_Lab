import test from 'node:test';
import assert from 'node:assert/strict';
import { createMotionBuffer, pushMotionSample, readMotionBuffer } from './remote-motion.js';

test('interpolates movement between received positions and holds the last one', () => {
  const motion = createMotionBuffer({ x: 0, z: 0, rotation: 0 }, 1000);
  pushMotionSample(motion, { x: 1, z: 2, rotation: 1 }, 1125);
  assert.deepEqual(readMotionBuffer(motion, 1062.5), { x: .5, z: 1, rotation: .5 });
  assert.equal(readMotionBuffer(motion, 1300).x, 1);
});

test('turns through the shortest angle across the wrap point', () => {
  const motion = createMotionBuffer({ x: 0, z: 0, rotation: Math.PI - .1 }, 0);
  pushMotionSample(motion, { x: 1, z: 0, rotation: -Math.PI + .1 }, 100);
  assert.ok(Math.abs(readMotionBuffer(motion, 50).rotation - Math.PI) < .001);
});

test('ignores identical updates and bounds the position history', () => {
  const motion = createMotionBuffer({ x: 0, z: 0, rotation: 0 }, 0);
  pushMotionSample(motion, { x: 0, z: 0, rotation: 0 }, 100);
  assert.equal(motion.length, 1);
  for (let i = 1; i <= 20; i++) pushMotionSample(motion, { x: i, z: 0, rotation: 0 }, i * 100);
  assert.equal(motion.length, 8);
  assert.equal(readMotionBuffer(motion, 3000).x, 20);
});
