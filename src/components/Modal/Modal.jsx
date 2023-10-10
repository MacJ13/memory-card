/* eslint-disable react/prop-types */

import ModalGameOver from "./ModalGameOver";
import ModalStart from "./ModalStart";
import ModalNextLevel from "./ModalNextLevel";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({
  game,
  onNextClick,
  onStartClick,
  onQuitClick,
  onRestartClick,
  onResetHighScore,
}) => {
  const [triggerAnimation, setTriggerAnimation] = useState(true);

  useEffect(() => {
    const triggerTimer = setTimeout(() => {
      setTriggerAnimation(false);
    }, 300);

    return () => {
      clearTimeout(triggerTimer);
    };
  }, []);
  const { status, level, currentScore, highScore } = game;

  const cardClass = !triggerAnimation ? "modal" : "modal transparent";

  const gameover = status === "gameover";

  const win = status === "winner";

  const renderModal = () => {
    if (gameover)
      return (
        <ModalGameOver
          currentScore={currentScore}
          onQuitClick={onQuitClick}
          onRestartClick={onRestartClick}
        />
      );
    else if (win) {
      return (
        <ModalNextLevel
          level={level}
          currentScore={currentScore}
          onQuitClick={onQuitClick}
          onHandleClick={onNextClick}
        />
      );
    } else
      return (
        <ModalStart
          highScore={highScore}
          onHandleClick={onStartClick}
          onResetHighScore={onResetHighScore}
        />
      );
  };

  return <div className={cardClass}>{renderModal()}</div>;
};

export default Modal;
