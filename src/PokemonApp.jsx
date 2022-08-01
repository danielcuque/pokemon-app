import { useState } from "react";
import { GridPokemon, Search } from "./components";

export const PokemonApp = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const onAddNewpokemon = (namePokemon) => {
    if (pokemon !== namePokemon) {
      setPokemon(namePokemon);
    }
  };

  return (
    <>
      <div className="bg-primary/[0.1] mainContainer min-w-fit principalContainer h-screen ">
        <Search onNewPokemon={(value) => onAddNewpokemon(value)} />
        <GridPokemon key={pokemon} namePokemon={pokemon} />
      </div>
      <footer className="">
        <p className="text-center bg-primary/[0.1]">
          Desarrollado por{" "}
          <a
            href="https://github.com/danielcuque"
            className="text-primary font-bold"
          >
            danielcuque
          </a>
        </p>
      </footer>
    </>
  );
};
