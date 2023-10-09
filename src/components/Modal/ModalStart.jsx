import { useState } from "react";
import { LEVEL_DIFFICULTIES } from "../../data/config";
import Button from "./Button";
import Heading from "./Heading";

// eslint-disable-next-line react/prop-types
const ModalStart = ({ onHandleClick }) => {
  const [number, setNumber] = useState(0);

  const { name, count } = LEVEL_DIFFICULTIES[number];

  const onHandlePrevious = () => {
    if (number === 0) {
      setNumber(LEVEL_DIFFICULTIES.length - 1);
    } else {
      setNumber(number - 1);
    }
  };

  const onHandleNext = () => {
    if (number === LEVEL_DIFFICULTIES.length - 1) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <>
      <div className="modal-start">
        <Heading />
        <p className="paragraph">
          Welcome to <strong>Pokemon - Memory Game!</strong> Get points by
          clicking on a card of pokemon but{" "}
          <strong>don&apos;t try to click on any more than once!</strong> Good
          luck!
        </p>
        <div className="modal-controls">
          <button className="modal-chevron-btn" onClick={onHandlePrevious}>
            <svg
              width="32px"
              height="32px"
              viewBox="-5.5 0 26 26"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                transform="translate(-423.000000, -1196.000000)"
                fill="#2e50b4"
              >
                {" "}
                <path
                  d="M428.115,1209 L437.371,1200.6 C438.202,1199.77 438.202,1198.43 437.371,1197.6 C436.541,1196.76 435.194,1196.76 434.363,1197.6 L423.596,1207.36 C423.146,1207.81 422.948,1208.41 422.985,1209 C422.948,1209.59 423.146,1210.19 423.596,1210.64 L434.363,1220.4 C435.194,1221.24 436.541,1221.24 437.371,1220.4 C438.202,1219.57 438.202,1218.23 437.371,1217.4 L428.115,1209"
                  id="chevron-left"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </svg>
          </button>
          <div className="modal-difficulties">
            Level: <span>{name}</span>
          </div>

          <button className="modal-chevron-btn" onClick={onHandleNext}>
            <svg
              width="32px"
              height="32px"
              viewBox="-5.5 0 26 26"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {" "}
              <g
                transform="translate(-474.000000, -1196.000000)"
                fill="#2e50b4"
              >
                {" "}
                <path d="M488.404,1207.36 L477.637,1197.6 C476.806,1196.76 475.459,1196.76 474.629,1197.6 C473.798,1198.43 473.798,1199.77 474.629,1200.6 L483.885,1209 L474.629,1217.4 C473.798,1218.23 473.798,1219.57 474.629,1220.4 C475.459,1221.24 476.806,1221.24 477.637,1220.4 L488.404,1210.64 C488.854,1210.19 489.052,1209.59 489.015,1209 C489.052,1208.41 488.854,1207.81 488.404,1207.36">
                  {" "}
                </path>{" "}
              </g>{" "}
            </svg>
          </button>
        </div>
        <Button
          onClick={() => {
            onHandleClick(count);
          }}
        >
          Start game
        </Button>
      </div>
    </>
  );
};

export default ModalStart;
