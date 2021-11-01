import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";

const styles = { form: { marginBottom: 20 } };

const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (pokemonName.trim() === "") {
      toast.info("Something WRONG! Try again!");
      return;
    }

    onSubmit(pokemonName);
    setPokemonName("");
  };

  const onHandleChange = (e) => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  return (
    <form onSubmit={onHandleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={onHandleChange}
      />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Найти
      </button>
    </form>
  );
};

export default PokemonForm;
