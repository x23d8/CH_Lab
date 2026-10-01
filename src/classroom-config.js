export const deskPositions = [
  { x: -5.65, z: -1.8 }, { x: -2.35, z: -1.8 }, { x: 1.05, z: -1.8 },
  { x: -5.65, z: 0.95 }, { x: -2.35, z: 0.95 }, { x: 1.05, z: 0.95 },
  { x: -5.65, z: 3.7 }, { x: -2.35, z: 3.7 }, { x: 1.05, z: 3.7 },
  { x: 4.4, z: 0.95 },
];

export const seatPosition = id => {
  const desk = deskPositions[id];
  return desk ? { x: desk.x, z: desk.z + 0.95 } : null;
};

export const EXAM_MINUTES = 15;
