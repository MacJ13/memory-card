export const getRandomNumber = () => {
  return Math.round(Math.random() * 300);
};

export const STATUS = {
  start: "start",
  playing: "playing",
  gameover: "gameover",
  win: "win",
};

const LEVEL = 1;

export const initialGame = {
  status: STATUS.start,
  level: LEVEL,
  difficulty: "",
  currentScore: 0,
  highScore: 0,
};

export const LEVEL_DIFFICULTIES = [
  { name: "easy", count: 4 },
  { name: "medium", count: 6 },
  { name: "hard", count: 8 },
];

export const calculateLimit = (level) => {
  return 4 * level >= 16 ? 16 : 4 * level;
};
