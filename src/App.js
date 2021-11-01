import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import PokemonInfo from "./Components/PokemoInfo/PokemonInfo";
import PokemonForm from "./Components/PokemonForm/PokemonForm";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");

  const handleFormSubmit = (pokemonName) => {
    setPokemonName(pokemonName);
  };

  return (
    <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
      <PokemonForm onSubmit={handleFormSubmit} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
