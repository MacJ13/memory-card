/* eslint-disable react/prop-types */
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const ModalNextLevel = ({
  currentScore,
  level,
  onHandleClick,
  onRestartClick,
}) => {
  return (
    <>
      <div className="modal-start">
        <h3 className="h2">You pass the level {level}!</h3>
        <p className="paragraph">
          Your current result is: <strong>{currentScore}</strong>.
          {/* {highScore !== 0 && currentScore + 1 >= highScore ? (
            <em> You also set new record score!</em>
          ) : null} */}
        </p>
        <Button onClick={onHandleClick}>Next level</Button>
        <Button onClick={onRestartClick}>Restart game</Button>
      </div>
    </>
  );
};

export default ModalNextLevel;
