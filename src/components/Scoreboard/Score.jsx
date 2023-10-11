/* eslint-disable react/prop-types */
const Score = (props) => {
  return (
    <div className={`score score-${props.cls}`}>
      {props.cls} score: <span>{props.result}</span>
    </div>
  );
};

export default Score;
