/* eslint-disable react/prop-types */

import Button from "./Button";
import Modal from "./Modal";

const ModalGameOver = ({ onHandleClick, currentScore, highScore }) => {
  console.log({ currentScore, highScore });
  return (
    <>
      <Modal>
        <div className="modal-start">
          <h1 className="h2">Game Over!</h1>
          <p className="paragraph">
            Your current result is: <strong>{currentScore}</strong>
            <br />
            {highScore !== 0 && currentScore >= highScore ? (
              <em> You also set new record score!</em>
            ) : null}
          </p>
          <Button onClick={onHandleClick}>Restart game</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalGameOver;
