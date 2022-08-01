import { useFetchPokemon } from "../hooks";
import { CardPokemon, Error, Loading } from "./";

export const GridPokemon = ({ namePokemon }) => {
  const { pokemon, loading, error } = useFetchPokemon(namePokemon);

  if (loading) {
    return (
      // Componente para mostrar un loading
      <Loading />
    );
  } else {
    return (
      <div
        id="card-container"
        className="mainContainer items-center mx-5 my-10"
      >
        {/* // Componente para mostrar un error */}
        {error ? (
          <Error />
        ) : (
          // Componente para mostrar el pokémon
          <CardPokemon pokemon={pokemon} />
        )}
      </div>
    );
  }
};
