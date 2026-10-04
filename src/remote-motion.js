export function createMotionBuffer(pose, at) {
  return [{ x: pose.x, z: pose.z, rotation: pose.rotation, at }];
}

export function pushMotionSample(buffer, pose, at) {
  const last = buffer.at(-1);
  if (last && Math.hypot(pose.x - last.x, pose.z - last.z) < .001 &&
      Math.abs(Math.atan2(Math.sin(pose.rotation - last.rotation), Math.cos(pose.rotation - last.rotation))) < .001) return;
  buffer.push({ x: pose.x, z: pose.z, rotation: pose.rotation, at: Math.max(at, last.at + 1) });
  if (buffer.length > 8) buffer.shift();
}

export function readMotionBuffer(buffer, at) {
  while (buffer.length > 1 && buffer[1].at <= at) buffer.shift();
  const first = buffer[0];
  const next = buffer[1];
  if (!next || at <= first.at) return first;
  const progress = (at - first.at) / (next.at - first.at);
  const turn = Math.atan2(Math.sin(next.rotation - first.rotation), Math.cos(next.rotation - first.rotation));
  return {
    x: first.x + (next.x - first.x) * progress,
    z: first.z + (next.z - first.z) * progress,
    rotation: first.rotation + turn * progress,
  };
}
