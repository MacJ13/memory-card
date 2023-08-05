import CardGrid from "./Card/CardGrid";
import ModalStart from "./Modal/ModalStart";

import { useState } from "react";

const Main = () => {
  const [game, setGame] = useState({
    isStart: true,
    playing: false,
    score: 0,
    level: 1,
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
          <CardGrid />
        </>
      );
  };

  return <main className="main">{renderGame()}</main>;
};

export default Main;
