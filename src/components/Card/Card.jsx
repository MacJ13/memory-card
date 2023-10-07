/* eslint-disable react/prop-types */

import { useFetch } from "../useFetch";
import CardError from "./CardError";
import CardGrid from "./CardGrid";
import CardLoading from "./CardLoading";

const Card = ({ limit, offset, onCardClick }) => {
  const [data, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const loading = data.length === 0 && !error;

  return (
    <>
      {loading ? (
        <CardLoading />
      ) : error ? (
        <CardError message={error} />
      ) : (
        <CardGrid onCardClick={onCardClick} data={data} />
      )}
    </>
  );
};

export default Card;
