import { useRef, useState } from "react";

import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import ScoreBoard from "./Scoreboard/ScoreBoard";
import { INITIAL_GAME_SETUP, getRandomNumber } from "../data/config";
import useLocalStorage from "../hooks/useLocalStorage";

const Main = () => {
  const [localValue, setLocalValue] = useLocalStorage(
    "highScore",
    INITIAL_GAME_SETUP.highScore
  );

  const [game, setGame] = useState({
    ...INITIAL_GAME_SETUP,
    highScore: localValue ?? INITIAL_GAME_SETUP.highScore,
  });

  console.log({ localValue, highScore: game.highScore });
  // const [game, setGame] = useState({
  //   status: "start",
  //   level: 1,
  //   limit: 4,
  //   currentScore: 0,
  //   highScore: 0,
  // });
  const [clickedPokemons, setClickedPokemons] = useState([]);

  const scoreRef = useRef(0);

  const offset = getRandomNumber();
  const limit = game.limit;

  const playing = game.status === "playing";

  const start = game.status === "start";

  const board = {
    level: game.level,
    current: game.currentScore,
    high: game.highScore,
    limit,
    guessed: clickedPokemons.length,
  };

  // const gameover = game.status === "gameover";
  // const lost = setClickedPokemons.length !== 0 && game.status === "gameover";

  // to imptove this logic !!!!!!!!!!!!!!!!!!!!!!!
  // const win = limit === clickedPokemons.length;
  // const win = game.status === "winner";

  const quitGame = () => {
    setGame({ ...game, level: 1, limit: 4, currentScore: 0, status: "start" });
    setClickedPokemons([]);
  };

  const resetHighScore = () => {
    setGame({
      ...game,

      highScore: INITIAL_GAME_SETUP.highScore,
    });

    setLocalValue(INITIAL_GAME_SETUP.highScore);
  };

  const startGame = (countLimit) => {
    setGame({
      ...game,
      status: "playing",
      limit: countLimit,
    });
  };

  const restartGame = () => {
    setGame({ ...game, status: "playing", currentScore: 0, level: 1 });
    setClickedPokemons([]);
  };

  const nextLevel = () => {
    setGame({ ...game, status: "playing", level: game.level + 1 });
    setClickedPokemons([]);
  };

  const increaseScore = (gameStatus) => {
    const score = game.currentScore + 1;
    if (game.currentScore >= game.highScore) {
      setGame({
        ...game,
        status: gameStatus,
        currentScore: score,
        highScore: score,
      });
      setLocalValue(score);
    } else {
      setGame({ ...game, status: gameStatus, currentScore: score });
    }
  };

  const onCardClick = (pokemon) => {
    const { name } = pokemon;

    const clicked = clickedPokemons.find((clicked) => clicked.name === name);
    scoreRef.current++;
    if (clicked) {
      scoreRef.current = 0;
      setGame({ ...game, status: "gameover" });
    } else if (scoreRef.current >= limit) {
      increaseScore("winner");
      scoreRef.current = 0;
      setClickedPokemons([...clickedPokemons, pokemon]);
    } else {
      setClickedPokemons([...clickedPokemons, pokemon]);
      increaseScore("playing");
    }
  };

  const renderGame = () => {
    return (
      <>
        {!start && <ScoreBoard board={board} />}

        {playing ? (
          <Card limit={limit} offset={offset} onCardClick={onCardClick} />
        ) : (
          <Modal
            game={game}
            onResetHighScore={resetHighScore}
            onNextClick={nextLevel}
            onStartClick={startGame}
            onQuitClick={quitGame}
            onRestartClick={restartGame}
          />
        )}
      </>
    );
    // if (playing) {
    //   return (
    //     <>
    //       <ScoreBoard
    //         level={game.level}
    //         current={game.currentScore}
    //         high={game.highScore}
    //       />
    //       <Card
    //         limit={limit}
    //         onCardClick={onCardClick}
    //       />
    //     </>
    //   );
    // } else {
    //   return (
    //     <Modal
    //       game={game}
    //       onRestartClick={restartGame}
    //       onNextClick={nextLevel}
    //       onStartClick={startGame}
    //     />
    //   );

    // if (start) return <ModalStart onHandleClick={startGame} />;
    // else if (win)
    //   return (
    //     <ModalNextLevel
    //       game={game}
    //       onResetClick={restartGame}
    //       onHandleClick={nextLevel}
    //     />
    //   );
    // else if (gameover)
    //   return (
    //     <ModalGameOver
    //       currentScore={game.currentScore}
    //       highScore={game.highScore}
    //       onHandleClick={restartGame}
    //     />
    //   );
    // else {
    //   return (
    //     <>
    //       <ScoreBoard
    //         level={game.level}
    //         current={game.currentScore}
    //         high={game.highScore}
    //       />
    //       <Card
    //         limit={limit}
    //         lastPokemon={clickedPokemons.slice(-1)}
    //         onCardClick={onCardClick}
    //       />
    //     </>
    //   );
    // }
  };

  return <main className="main">{renderGame()}</main>;
};

export default Main;
