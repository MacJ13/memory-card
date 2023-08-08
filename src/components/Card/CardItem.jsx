/* eslint-disable react/prop-types */
const CardItem = ({ triggerAnimation, pokemon, onCardClick }) => {
  const handleClick = () => {
    onCardClick(pokemon);
  };

  const cardClass = !triggerAnimation ? "card" : "card hidden";

  return (
    <div className={cardClass} onClick={handleClick}>
      <div className="card-photo">
        {pokemon.img && <img src={pokemon.img} alt={pokemon.name} />}
      </div>
      <div className="card-title">{pokemon.name}</div>
    </div>
  );
};

export default CardItem;
