import Button from "./Button";
import Modal from "./Modal";

// eslint-disable-next-line react/prop-types
const ModalStart = ({ onHandleClick }) => {
  return (
    <>
      <Modal>
        <div className="modal-start">
          <h2 className="h2">Welcome!</h2>
          <p className="paragraph">
            Get points by clicking on a card of pokemon but don&apos;t try to
            click on any more than once!
            <br />
            Good luck!
          </p>
          <Button onClick={onHandleClick}>Start game</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalStart;
