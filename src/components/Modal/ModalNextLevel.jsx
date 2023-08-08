/* eslint-disable react/prop-types */
import Button from "./Button";
import Modal from "./Modal";

// eslint-disable-next-line react/prop-types
const ModalNextLevel = ({ game, onHandleClick, onResetClick }) => {
  const { highScore, currentScore, level } = game;
  return (
    <>
      <Modal>
        <div className="modal-start">
          <h3 className="h2">You pass the level {level}!</h3>
          <p className="paragraph">
            Your current result is: <strong>{currentScore}</strong>.
            {highScore !== 0 && currentScore >= highScore ? (
              <em> You also set new record score!</em>
            ) : null}
          </p>
          <Button onClick={onHandleClick}>Next level</Button>
          <Button onClick={onResetClick}>Restart game</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalNextLevel;
