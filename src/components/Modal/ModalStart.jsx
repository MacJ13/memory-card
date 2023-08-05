import Button from "./Button";
import Modal from "./Modal";
import Heading from "./Heading";

// eslint-disable-next-line react/prop-types
const ModalStart = ({ onHandleClick }) => {
  return (
    <>
      <Modal>
        <div className="modal-start">
          <Heading />
          {/* <h2 className="h2">Welcome!</h2> */}
          <p className="paragraph">
            Welcome to <strong>Pokemon - Memory Game!</strong> Get points by
            clicking on a card of pokemon but{" "}
            <strong>don&apos;t try to click on any more than once!</strong> Good
            luck!
          </p>
          <Button onClick={onHandleClick}>Start game</Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalStart;
