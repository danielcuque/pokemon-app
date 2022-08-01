// Se requiere como argumento el nombre del pokemon para realizar la búsqueda

export const getPokemonByName = async (name) => {
  const urlFetch = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
  const response = await fetch(urlFetch);
  if (response.status !== 200) {
    return "Error";
  }
  const pokemon = await response.json();
  return pokemon;
};
