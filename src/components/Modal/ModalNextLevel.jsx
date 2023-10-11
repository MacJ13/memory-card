/* eslint-disable react/prop-types */
import Button from "../Button";
import ModalBox from "./ModalBox";

// eslint-disable-next-line react/prop-types
const ModalNextLevel = ({
  currentScore,
  level,
  onHandleClick,
  onQuitClick,
}) => {
  return (
    <>
      <ModalBox>
        <h3 className="h2">You pass the level {level}!</h3>
        <p className="paragraph">
          Your current result is: <strong>{currentScore}</strong>.
          {/* {highScore !== 0 && currentScore + 1 >= highScore ? (
            <em> You also set new record score!</em>
          ) : null} */}
        </p>
        <Button className="modal-btn" onClick={onHandleClick}>
          Next level
        </Button>
        <Button className="modal-btn" onClick={onQuitClick}>
          Quit
        </Button>
      </ModalBox>
    </>
  );
};

export default ModalNextLevel;
