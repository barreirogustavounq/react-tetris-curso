export const TETROMINOS = {
  0: { shape: [[0]], color: "0,0,0" },
  I: {
    name: "I",
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "80, 227, 230",
  },
  T: {
    name: "T",
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "255, 68, 255",
  },
  S: {
    name: "S",
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "48, 211, 56",
  },
  Z: {
    name: "Z",
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "227, 78, 78",
  },
  L: {
    name: "L",
    shape: [
      [0, "L", 0, 0],
      [0, "L", 0, 0],
      [0, "L", "L", 0],
    ],
    color: "223, 173, 36",
  },
  J: {
    name: "J",
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "36, 95, 223",
  },
  O: {
    name: "O",
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "223, 217, 36",
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
