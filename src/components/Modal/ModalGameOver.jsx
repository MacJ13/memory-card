/* eslint-disable react/prop-types */

import Button from "../Button";
import ModalBox from "./ModalBox";

const ModalGameOver = ({ onRestartClick, onQuitClick, currentScore }) => {
  return (
    <>
      <ModalBox>
        <div className="modal-start">
          <h1 className="h2">Game Over!</h1>
          <p className="paragraph">
            Your current result is:{" "}
            <strong style={{ fontFamily: '"Cursed Timer", sans-serif' }}>
              {currentScore}
            </strong>
            <br />
            {/* {highScore !== 0 && currentScore > highScore + 1 ? (
            <em> You also set new record score!</em>
          ) : null} */}
          </p>
          <Button className="modal-btn" onClick={onRestartClick}>
            Restart game
          </Button>
          <Button className="modal-btn" onClick={onQuitClick}>
            Quit
          </Button>
        </div>
      </ModalBox>
    </>
  );
};

export default ModalGameOver;
