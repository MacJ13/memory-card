/* eslint-disable react/prop-types */

import ModalGameOver from "./ModalGameOver";
import ModalStart from "./ModalStart";
import ModalNextLevel from "./ModalNextLevel";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Modal = ({ game, onRestartClick, onNextClick, onStartClick }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(true);

  useEffect(() => {
    const triggerTimer = setTimeout(() => {
      setTriggerAnimation(false);
    }, 300);

    return () => {
      clearTimeout(triggerTimer);
    };
  }, []);
  const { status, level, currentScore } = game;

  const cardClass = !triggerAnimation ? "modal" : "modal transparent";

  const gameover = status === "gameover";

  const win = status === "winner";

  const renderModal = () => {
    if (gameover)
      return (
        <ModalGameOver
          currentScore={currentScore}
          onHandleClick={onRestartClick}
        />
      );
    else if (win) {
      return (
        <ModalNextLevel
          level={level}
          currentScore={currentScore}
          onRestartClick={onRestartClick}
          onHandleClick={onNextClick}
        />
      );
    } else return <ModalStart onHandleClick={onStartClick} />;
  };

  return <div className={cardClass}>{renderModal()}</div>;
};

export default Modal;
