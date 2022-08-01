export const CardPokemon = ({ pokemon }) => {
  // Desestructuramos el objeto pokemon para obtener los datos que necesitamos
  const {
    name,
    sprites: { front_default },
    types,
    height,
    weight,
    abilities,
  } = pokemon;

  //   Familia de pokemones
  const pokemonFamily = types.map((type) => type.type.name);

  return (
    <div
      className={`mainContainer bg-white rounded-xl border-2 border-acent w-full animate__animated animate__fadeIn`}
    >
      {/* Contenedor para la foto del pokemon */}
      <div
        id="photo-container"
        className={`mainContainer items-center border-b-2 border-acent p-5`}
      >
        <h1 className="capitalize font-bold text-3xl">{name}</h1>
        <img src={front_default} alt={name} className="h-44 w-44" />
      </div>

      {/* Contenedor para la información del pokemon */}
      <div id="information-container" className="m-5">
        <h4>
          <span>Tipo</span>
          <p
            className={`capitalize border-2 border-pokemon-${pokemonFamily}  p-1 rounded`}
          >
            {pokemonFamily}
          </p>
        </h4>
        <h4>
          <span>Altura</span> {height / 10} m
        </h4>
        <h4>
          <span>Peso</span> {weight / 10} kg
        </h4>
        <h4>
          <span>Habilidades</span>
          {abilities.map(({ ability }) => ability.name)}
        </h4>
      </div>
    </div>
  );
};