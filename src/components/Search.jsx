import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";

export const Search = ({ onNewPokemon }) => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      return alert("Ingrese un pokemon");
    }
    onNewPokemon(search);
  };

  return (
    <form
      onSubmit={onSubmit}
      id="search-container"
      className="mainContainer md:rounded md:w-72 bg-primary p-5 mb-5"
    >
      <label className="text-white font-bold pb-2">Buscar Pokémon:</label>
      <div className="flex flex-row h-8 justify-between">
        <input
          value={search}
          onChange={handleChange}
          placeholder="Ej. Pikachu"
          type="search"
          className="h-full w-3/4 px-2 rounded text-gray-700 mb-3 leading-tight focus:outline-acent placeholder-gray-300 focus:placeholder-gray-400"
        />
        <button className="rounded w-8 h-8 text-white flex items-center justify-center bg-acent">
          <SearchIcon className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};
