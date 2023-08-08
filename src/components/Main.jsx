import ModalStart from "./Modal/ModalStart";

import { useState } from "react";
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

  const limit = 4 * game.level >= 16 ? 16 : 4 * game.level;

  const start = game.status === "start";

  const lost = setClickedPokemons.length !== 0 && game.status === "gameover";

  // to imptove this logic !!!!!!!!!!!!!!!!!!!!!!!
  const win = limit === clickedPokemons.length;

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
    setGame({ ...game, level: game.level + 1 });
    setClickedPokemons([]);
  };

  const onCardClick = (pokemon) => {
    const { name } = pokemon;

    const clicked = clickedPokemons.find((clicked) => clicked.name === name);

    // in condition statements try to insert to set status "winnet"

    if (clicked) {
      setGame({ ...game, status: "gameover" });
    } else {
      setClickedPokemons([...clickedPokemons, pokemon]);
      const score = game.currentScore + 1;
      setGame({ ...game, currentScore: score });
      if (game.currentScore >= game.highScore) {
        setGame({ ...game, currentScore: score, highScore: score });
      } else {
        setGame({ ...game, currentScore: score });
      }
    }
  };

  const renderGame = () => {
    if (win)
      return (
        <ModalNextLevel
          game={game}
          onResetClick={restartGame}
          onHandleClick={nextLevel}
        />
      );
    else if (start) return <ModalStart onHandleClick={startGame} />;
    else if (lost)
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
