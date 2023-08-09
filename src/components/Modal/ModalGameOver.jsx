/* eslint-disable react/prop-types */

import Button from "./Button";

const ModalGameOver = ({ onHandleClick, currentScore }) => {
  return (
    <>
      <div className="modal-start">
        <h1 className="h2">Game Over!</h1>
        <p className="paragraph">
          Your current result is: <strong>{currentScore}</strong>
          <br />
          {/* {highScore !== 0 && currentScore > highScore + 1 ? (
            <em> You also set new record score!</em>
          ) : null} */}
        </p>
        <Button onClick={onHandleClick}>Restart game</Button>
      </div>
    </>
  );
};

export default ModalGameOver;
