/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const shuffledElements = (data) => {
  return [...data].sort((a, b) => 0.5 - Math.random());
};

const CardGrid = ({ data, onCardClick }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(true);
  const [pokemons, setPokemons] = useState(shuffledElements(data));

  let trigerTimer = 0;

  const onHandleClick = (pokemon) => {
    if (!trigerTimer) {
      onCardClick(pokemon);
      setTriggerAnimation(true);
      trigerTimer = setTimeout(() => {
        setTriggerAnimation(false);
      }, 500);
      const shuffledTimer = setTimeout(() => {
        setPokemons(shuffledElements(pokemons));
      }, 300);
      return () => {
        clearTimeout(trigerTimer);
        clearTimeout(shuffledTimer);
      };
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggerAnimation(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderCards = () => {
    return pokemons.map((pokemon) => {
      return (
        <CardItem
          key={pokemon.name}
          triggerAnimation={triggerAnimation}
          pokemon={pokemon}
          onCardClick={onHandleClick}
        />
      );
    });
  };

  return (
    <>
      <div className="card-grid">{renderCards()}</div>
    </>
  );
};

export default CardGrid;
