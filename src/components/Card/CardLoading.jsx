import pokeball from "../../assets/pokeball.svg";

const CardLoading = () => {
  return (
    <div className="card-loading">
      <span className="card-loading-text">
        Loading
        <span className="dot-one">.</span>
        <span className="dot-two">.</span>
        <span className="dot-three">.</span>
      </span>

      <img className="card-pokeball" src={pokeball}></img>
    </div>
  );
};

export default CardLoading;
