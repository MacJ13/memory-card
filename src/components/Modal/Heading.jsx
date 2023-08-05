import logo from "../../assets/logo.png";

const Heading = () => {
  return (
    <div className="heading">
      <img src={logo} alt="pokemon logo"></img>
      <h1 className="h1">Memory game!</h1>
    </div>
  );
};

export default Heading;
