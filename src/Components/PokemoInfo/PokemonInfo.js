import { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus("pending");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`ERROR, no Pokemon's name like ${pokemonName}`)
        );
      })
      .then((pokemon) => {
        setPokemon(pokemon);
        setStatus("resolved");
      })
      .catch((error) => {
        setError(error);
        setStatus("rejected");
      });
  }, [pokemonName]);

  if (status === "idle") {
    return <div> Enter Pokemon Name, please!</div>;
  }

  if (status === "pending") {
    return <div>Loading . . . </div>;
  }

  if (status === "rejected") {
    return <div>{error.message}</div>;
  }

  if (status === "resolved") {
    return (
      <div>
        <PokemonCard pokemon={pokemon} />
      </div>
    );
  }
};

export default PokemonInfo;
