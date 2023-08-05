/* eslint-disable react/prop-types */

import Score from "./Score";

/* eslint-disable no-unused-vars */
const ScoreBoard = ({ level, current, high }) => {
  return (
    <>
      <div className="score-board">
        <h2 className="h2 level">Level {level}</h2>
        <Score cls="current" result={current} />
        <Score cls="high" result={high} />
      </div>
    </>
  );
};

export default ScoreBoard;
