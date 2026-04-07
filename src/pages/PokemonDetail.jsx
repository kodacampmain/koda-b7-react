import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getPokemonDetail } from "../api/getPokemonData";

function PokemonDetail() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    (async function () {
      try {
        const data = await getPokemonDetail(pokemonId);
        // console.log(data);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <main>
      {Object.keys(pokemon).length ? (
        <>
          <img src={pokemon.img} alt={pokemon.name} />
          <p>{pokemon.name}</p>
          <div>
            {pokemon.types.map((type, idx) => {
              return <img key={idx} src={type.img} alt={type.name} />;
            })}
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
}

export default PokemonDetail;
