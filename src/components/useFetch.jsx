import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const sleep = async (s) => {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
  };

  const fetchData = async (url) => {
    const res = await fetch(url);

    console.log("res", res);
    if (!res.ok)
      throw new Error(
        `${res.status}. Problem witch connection. Try again later.`
      );

    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const { results } = await fetchData(url);

        const fetchUrls = results.map(async (data) => {
          return await fetchData(data.url);
        });

        const dataUrls = await Promise.all(fetchUrls);
        console.log(dataUrls);

        const pokemonData = dataUrls.map((pokemon) => {
          return {
            name: pokemon.name,
            img: pokemon.sprites.front_default,
          };
        });

        await sleep(1);

        setData(pokemonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, error];
};
