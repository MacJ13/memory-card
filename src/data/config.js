export const OFFSET = Math.round(Math.random() * 300);

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
  currentScore: 0,
  highScore: 0,
};

export const calculateLimit = (level) => {
  return 4 * level >= 16 ? 16 : 4 * level;
};
