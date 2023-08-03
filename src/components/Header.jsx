import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="heading">
        <img src={logo} alt="pokemon logo"></img>
        <h1 className="h1">Memory game!</h1>
      </div>
    </header>
  );
};

export default Header;
