import { PrevNextPokemon, Pokemon } from "@/types/types";
import { fetcher } from "@/utils/fetcher";
import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";

export default function PrevNext({ id }: { id: number }) {
  const [entries, setEntries] = useState(1025);
  const [prevPokemon, setPrevPokemon] = useState<PrevNextPokemon>();
  const [nextPokemon, setNextPokemon] = useState<PrevNextPokemon>();

  async function getEntriesNr() {
    const data = await fetcher("https://pokeapi.co/api/v2/pokedex/1/");

    console.log("data", data);
    setEntries(data.pokemon_entries.length);
  }

  async function getData(
    id: string,
    setState: React.Dispatch<SetStateAction<PrevNextPokemon | undefined>>
  ) {
    /* const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const responeData = await response.json(); */
    const data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`);
    /* console.log(id, data); */
    // gör error om fel id skickats/ inte fått svar tillbaka: ex if(response.ok){} else nånting(response.status) osv.

    const pokemon: { id: number; name: string; artwork: string } = {
      id: data.id,
      name: data.name,
      artwork: data.sprites.other["official-artwork"].front_default,
    };

    //zod för att pokemon variabeln ska inehålla rätt saker / inte sakna något?
    setState(pokemon);
  }

  useEffect(() => {
    getEntriesNr();
  }, []);

  useEffect(() => {
    if (id) {
      id !== 1 && getData((id - 1).toString(), setPrevPokemon);
      id !== 1025 && getData((id + 1).toString(), setNextPokemon);
    }
  }, [id]);

  console.log(prevPokemon)
  console.log(nextPokemon)

  return (
    <div className="flex justify-between max-sm:text-xs">
      {id !== 1 ? (
        <Link
          rel="stylesheet"
          href={`${id - 1}`}
        >
          <div className="flex items-center">
            {"< "}
            {prevPokemon ? (
              <div className="flex flex-col sm:flex-row">
                <span className="sr-only">Go to previous Pokémon</span>
                <div className="flex justify-center items-center">
                  #{prevPokemon.id}
                  <img
                    className="h-6 pl-2 sm:hidden"
                    src={prevPokemon?.artwork}
                    alt=""
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
              src={prevPokemon?.artwork}
              alt=""
            />
          </div>
        </Link>
      ) : (
        <div />
      )}
      {id !== entries && (
        <Link
          rel="stylesheet"
          href={`${id + 1}`}
        >
          <div className="flex items-center">
            <span className="sr-only">Go to next Pokémon</span>
            <img
              className="h-6 pr-2 max-sm:hidden"
              src={nextPokemon?.artwork}
              alt=""
            />
            {nextPokemon ? (
              <div className="flex flex-col sm:flex-row">
                <div className="flex justify-center items-center">
                  <img
                    className="h-6 pr-2 sm:hidden"
                    src={nextPokemon?.artwork}
                    alt=""
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
