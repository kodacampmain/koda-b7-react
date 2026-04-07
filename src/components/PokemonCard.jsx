import { useNavigate } from "react-router";
import slugify from "slugify";

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  return (
    <article
      className="borderstd-black w-full flex flex-col items-center justify-center gap-1 cursor-pointer"
      onClick={() => {
        navigate(`/pokemon/${pokemon.id}/${slugify(pokemon.name)}`);
      }}
    >
      <img src={pokemon.img} alt={pokemon.name} />
      <p className="text-2xl">{pokemon.name}</p>
      <div className="flex w-full flex-wrap">
        {pokemon.abilities.length &&
          pokemon.abilities.map((ability, idx) => {
            return (
              <p key={idx} className="borderstd-black flex-1 p-1 text-sm text-center basis-1/2">
                {ability}
              </p>
            );
          })}
      </div>
    </article>
  );
}

export default PokemonCard;
