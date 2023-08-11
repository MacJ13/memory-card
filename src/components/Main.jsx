import { useRef, useState } from "react";

import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import ScoreBoard from "./Scoreboard/ScoreBoard";

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
  const playing = game.status === "playing";

  const start = game.status === "start";
  // const gameover = game.status === "gameover";
  // const lost = setClickedPokemons.length !== 0 && game.status === "gameover";

  // to imptove this logic !!!!!!!!!!!!!!!!!!!!!!!
  // const win = limit === clickedPokemons.length;
  // const win = game.status === "winner";

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

  const increaseScore = (gameStatus) => {
    const score = game.currentScore + 1;
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

    const clicked = clickedPokemons.find((clicked) => clicked.name === name);
    scoreRef.current++;
    if (clicked) {
      scoreRef.current = 0;
      setGame({ ...game, status: "gameover" });
    } else if (scoreRef.current >= limit) {
      increaseScore("winner");
      scoreRef.current = 0;
    } else {
      setClickedPokemons([...clickedPokemons, pokemon]);
      increaseScore("playing");
    }
  };

  const renderGame = () => {
    return (
      <>
        {!start && (
          <ScoreBoard
            level={game.level}
            current={game.currentScore}
            high={game.highScore}
          />
        )}

        {playing ? (
          <Card limit={limit} onCardClick={onCardClick} />
        ) : (
          <Modal
            game={game}
            onRestartClick={restartGame}
            onNextClick={nextLevel}
            onStartClick={startGame}
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
