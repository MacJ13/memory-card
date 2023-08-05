import CardGrid from "./Card/CardGrid";
import ModalStart from "./Modal/ModalStart";

import { useState } from "react";
import ScoreBoard from "./Scoreboard/ScoreBoard";

const Main = () => {
  const [game, setGame] = useState({
    isStart: true,
    playing: false,
    level: 1,
    currentScore: 0,
    highScore: 0,
  });

  const startGame = () => {
    setGame({ ...game, isStart: !game.isStart, playing: true });
  };

  const renderGame = () => {
    if (game.isStart && !game.playing)
      return <ModalStart onHandleClick={startGame} />;
    else if (game.playing)
      return (
        <>
          <ScoreBoard
            level={game.level}
            current={game.currentScore}
            high={game.highScore}
          />
          <CardGrid />
        </>
      );
  };

  return <main className="main">{renderGame()}</main>;
};

export default Main;
