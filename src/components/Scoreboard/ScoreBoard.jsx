/* eslint-disable react/prop-types */

import Score from "./Score";

/* eslint-disable no-unused-vars */
const ScoreBoard = ({ board }) => {
  return (
    <>
      <div className="score-board">
        <h2 className="h2 level">Level {board.level}</h2>
        <div className="score-results">
          <Score cls="current" result={board.current} />
          <Score cls="high" result={board.high} />
          <div className="score-guessed">
            {board.guessed} / {board.limit}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
