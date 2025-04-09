import { NextPrevPokemon, Pokemon } from "@/types/types";
import { fetcher } from "@/utils/fetcher";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PrevNext({
  data,
  prevPokemon,
  nextPokemon,
}: {
  data: Pokemon;
  prevPokemon: NextPrevPokemon;
  nextPokemon: NextPrevPokemon;
}) {
  const [entries, setEntries] = useState(1025);

  async function getEntriesNr() {
    const data = await fetcher("https://pokeapi.co/api/v2/pokedex/1/");
    data && typeof data.pokemon_entries && setEntries(data.pokemon_entries.number);
  }

  useEffect(() => {
    getEntriesNr();
  }, []);

  return (
    <div className="flex justify-between max-sm:text-xs">
      {data.id !== 1 ? (
        <Link
          rel="stylesheet"
          href={`${data.id - 1}`}
        >
          <div className="flex items-center">
            {"< "}
            {prevPokemon ? (
              <div className="flex flex-col sm:flex-row">
                <div className="flex justify-center items-center">
                  #{prevPokemon.id}
                  <img
                    className="h-6 pl-2 sm:hidden"
                    src={prevPokemon?.artwork.default}
                    alt="previous pokemon sprite"
                  />
                </div>
                <div>
                  {prevPokemon.name.charAt(0).toUpperCase()}
                  {prevPokemon.name.slice(1)}
                </div>
              </div>
            ) : (
              "previous"
            )}
            <img
              className="h-6 pl-2 max-sm:hidden"
              src={prevPokemon?.artwork.default}
              alt="previous pokemon sprite"
            />
          </div>
        </Link>
      ) : (
        <div />
      )}
      {data.id !== entries && (
        <Link
          rel="stylesheet"
          href={`${data.id + 1}`}
        >
          <div className="flex items-center">
            <img
              className="h-6 pr-2 max-sm:hidden"
              src={nextPokemon?.artwork.default}
              alt="next pokemon sprite"
            />
            {nextPokemon ? (
              <div className="flex flex-col sm:flex-row">
                <div className="flex justify-center items-center">
                  <img
                    className="h-6 pr-2 sm:hidden"
                    src={nextPokemon?.artwork.default}
                    alt="next pokemon sprite"
                  />
                  #{nextPokemon.id}
                </div>
                <div>
                  {nextPokemon.name.charAt(0).toUpperCase()}
                  {nextPokemon.name.slice(1)}
                </div>
              </div>
            ) : (
              "next"
            )}
            {" >"}
          </div>
        </Link>
      )}
    </div>
  );
}
