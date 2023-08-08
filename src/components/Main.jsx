import ModalStart from "./Modal/ModalStart";

import { useRef, useState } from "react";
import ScoreBoard from "./Scoreboard/ScoreBoard";
import ModalNextLevel from "./Modal/ModalNextLevel";
import Card from "./Card/Card";
import ModalGameOver from "./Modal/ModalGameOver";

const Main = () => {
  const [game, setGame] = useState({
    status: "start",
    level: 1,
    currentScore: 0,
    highScore: 0,
  });
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const scoreRef = useRef(0);

  const limit = 4 * game.level >= 16 ? 16 : 4 * game.level;

  const start = game.status === "start";
  const gameover = game.status === "gameover";
  // const lost = setClickedPokemons.length !== 0 && game.status === "gameover";

  // to imptove this logic !!!!!!!!!!!!!!!!!!!!!!!
  // const win = limit === clickedPokemons.length;
  const win = game.status === "winner";

  const startGame = () => {
    setGame({
      ...game,
      status: "playing",
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

  const increaseScore = (gameStatus, score) => {
    if (game.currentScore >= game.highScore) {
      setGame({
        ...game,
        status: gameStatus,
        currentScore: score,
        highScore: score,
      });
    } else {
      setGame({ ...game, status: gameStatus, currentScore: score });
    }
  };

  const onCardClick = (pokemon) => {
    const { name } = pokemon;
    console.log({ game });
    console.log(clickedPokemons);

    const clicked = clickedPokemons.find((clicked) => clicked.name === name);

    if (clicked) {
      scoreRef.current = 0;
      setGame({ ...game, status: "gameover" });
      return;
      // in condition statements try to insert to set status "winnet"
    }
    const score = game.currentScore + 1;
    scoreRef.current = score;
    // if (game.currentScore >= game.highScore) {
    //   setGame({ ...game, currentScore: score, highScore: score });
    // } else {
    //   setGame({ ...game, currentScore: score });
    // }
    // console.log({ score, current: game.score });

    if (scoreRef.current >= limit) {
      increaseScore("winner", score);
      scoreRef.current = 0;
    } else {
      setClickedPokemons([...clickedPokemons, pokemon]);
      increaseScore("playing", score);
    }
    // console.log({
    //   length: clickedPokemons.length,
    //   score: game.currentScore,
    //   scoreRef: scoreRef.current,
    // });
  };

  const renderGame = () => {
    if (start) return <ModalStart onHandleClick={startGame} />;
    else if (win)
      return (
        <ModalNextLevel
          game={game}
          onResetClick={restartGame}
          onHandleClick={nextLevel}
        />
      );
    else if (gameover)
      return (
        <ModalGameOver
          currentScore={game.currentScore}
          highScore={game.highScore}
          onHandleClick={restartGame}
        />
      );
    else {
      return (
        <>
          <ScoreBoard
            level={game.level}
            current={game.currentScore}
            high={game.highScore}
          />
          <Card
            limit={limit}
            lastPokemon={clickedPokemons.slice(-1)}
            onCardClick={onCardClick}
          />
        </>
      );
    }
  };

  return <main className="main">{renderGame()}</main>;
};

export default Main;
