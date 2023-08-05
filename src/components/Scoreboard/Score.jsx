/* eslint-disable react/prop-types */
const Score = (props) => {
  return (
    <div className={`score score-${props.cls}`}>
      {props.cls} score: {props.result}
    </div>
  );
};

export default Score;
