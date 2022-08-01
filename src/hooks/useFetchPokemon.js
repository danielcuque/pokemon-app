import { useState, useEffect } from "react";
import { getPokemonByName } from "../helpers";

export const useFetchPokemon = (name) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setMalo] = useState(false);

  const getInfoPokemon = async () => {
    const newPokemon = await getPokemonByName(name);
    if (newPokemon === "Error") {
      setMalo(true);
      setPokemon({});
    } else {
      setPokemon(newPokemon);
    }
    setLoading(false);
  };

  useEffect(() => {
    getInfoPokemon();
  }, []);

  return {
    pokemon,
    loading,
    error,
  };
};
