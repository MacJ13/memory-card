/* eslint-disable react/prop-types */
const Card = ({ pokemon, onCardClick }) => {
  const handleClick = () => {
    onCardClick(pokemon);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-photo">
        {pokemon.img && <img src={pokemon.img} alt={pokemon.name} />}
      </div>
      <div className="card-title">{pokemon.name}</div>
    </div>
  );
};

export default Card;
