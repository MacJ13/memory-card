/* eslint-disable react/prop-types */
import { useFetch } from "../useFetch";
import CardGrid from "./CardGrid";
import CardLoading from "./CardLoading";

const Card = ({ limit, onCardClick }) => {
  const OFFSET = Math.round(Math.random() * 300);

  const [data, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${OFFSET}`
  );

  return (
    <>
      {data.length === 0 && !error ? (
        <CardLoading />
      ) : (
        <CardGrid onCardClick={onCardClick} data={data} />
      )}
    </>
  );
};

export default Card;
