/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useFetch } from "../useFetch";
import Card from "./Card";
import CardLoading from "./CardLoading";

const CardGrid = ({ onCardClick }) => {
  const [data, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${4}&offset=${0}`
  );

  const renderCards = () => {
    return data.map((pokemon) => {
      return (
        <Card key={pokemon.name} pokemon={pokemon} onCardClick={onCardClick} />
      );
    });
  };
  return (
    <>
      {data.length === 0 && !error ? (
        <CardLoading />
      ) : (
        <div className="card-grid">{renderCards()}</div>
      )}
    </>
  );
};

export default CardGrid;
