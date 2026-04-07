import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import Header from "../components/Header.jsx";
import { getPokemonDataWithAbilities } from "../api/getPokemonData.js";
import PokemonCard from "../components/PokemonCard.jsx";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(() => {
    // const page = parseInt(searchParam.get("page"));
    return parseInt(searchParam.get("page")) || 1;
  });
  // useEffect(() => {
  //   console.log("page change");
  // }, [searchParam.get("page")]);
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const data = await getPokemonDataWithAbilities(page);
        setPokemons(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
  return (
    <main>
      {/* <Nav /> */}
      <Header name={"Trainers"} />
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 p-1">
        {!isLoading && pokemons.length
          ? pokemons.map((pokemon, idx) => {
              return <PokemonCard pokemon={pokemon} key={idx} />;
            })
          : "Loading..."}
      </section>
      <section className="flex justify-center gap-2 [&_p]:cursor-pointer [&_p]:select-none [&_p]:hover:text-blue-500">
        {page > 1 && (
          <p
            onClick={() => {
              setPage((page) => page - 1);
              setSearchParam((searchParam) => {
                const currentPage = parseInt(searchParam.get("page"));
                // console.log(currentPage);
                searchParam.set("page", `${currentPage - 1}`);
                return searchParam;
              });
            }}
          >
            Prev
          </p>
        )}
        <div className="flex gap-1">
          {[...Array(5).keys()].map((num) => {
            return (
              <p
                key={num}
                onClick={() => {
                  // console.log("clicked");
                  window.scrollTo(0, 0);
                  setSearchParam({
                    page: num + 1,
                  });
                  setPage(num + 1);
                }}
              >
                {num + 1}
              </p>
            );
          })}
        </div>
        <p
          onClick={() => {
            setPage((page) => page + 1);
            setSearchParam((searchParam) => {
              const currentPage = parseInt(searchParam.get("page")) || 1;
              // console.log(currentPage);
              searchParam.set("page", `${currentPage + 1}`);
              return searchParam;
            });
          }}
        >
          Next
        </p>
      </section>
    </main>
  );
}

export default Pokemon;
