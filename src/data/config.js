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

export const LEVEL_DIFFICULTIES = [
  { name: "easy", count: 4 },
  { name: "medium", count: 8 },
  { name: "hard", count: 12 },
];

export const INITIAL_GAME_SETUP = {
  status: STATUS.start,
  level: LEVEL,
  limit: LEVEL_DIFFICULTIES.count,
  currentScore: 0,
  highScore: 0,
};

export const calculateLimit = (level) => {
  return 4 * level >= 16 ? 16 : 4 * level;
};
