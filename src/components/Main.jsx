import ModalStart from "./Modal/ModalStart";

const Main = () => {
  const startGame = () => {
    console.log("start game");
  };

  return (
    <main className="main">
      <ModalStart onHandleClick={startGame} />;
    </main>
  );
};

export default Main;
