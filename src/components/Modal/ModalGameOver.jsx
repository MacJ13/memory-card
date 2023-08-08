/* eslint-disable react/prop-types */
import Button from "./Button";
import Modal from "./Modal";
const ModalGameOver = ({ onHandleClick, currentScore }) => {
  return (
    <>
      <Modal>
        <div className="modal-start">
          <h1 className="h1">Game Over!</h1>
          <p className="paragraph">Your result is: {currentScore}</p>
          <Button onClick={onHandleClick}>Restart game</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalGameOver;
