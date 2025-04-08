import PokemonInfo from "@/components/pokemon/PokemonInfo";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SetStateAction, useEffect, useMemo, useState } from "react";
import type { Pokemon } from "@/types/types";
import type { NextPrevPokemon } from "@/types/types";
import { fetcher } from "@/utils/fetcher";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import PokemonSearch from "@/components/ui/PokemonSearch";
import Random from "@/components/ui/Random";

/* const fetcher = async (id: number | string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}; */

export default function Pokemon() {
  const [data, setData] = useState<Pokemon>();
  const [prevPokemon, setPrevPokemon] = useState<NextPrevPokemon>();
  const [nextPokemon, setNextPokemon] = useState<NextPrevPokemon>();

  const router = useRouter();
  const id = router.query.id as string;

  async function getData(
    id: string,
    setState: React.Dispatch<SetStateAction<Pokemon | undefined>>
  ) {
    /* const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const responeData = await response.json(); */
    const data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`);
    /* console.log(id, data); */
    // gör error om fel id skickats/ inte fått svar tillbaka: ex if(response.ok){} else nånting(response.status) osv.

    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      types: data.types.map((type: any) => type.type.name),
      abilities: data.abilities.map((ability: any) => ability.ability.name),
      weight: data.weight,
      height: data.height,
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defence: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defence: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      },
      artwork: {
        default: data.sprites.other["official-artwork"].front_default,
        shiny: data.sprites.other["official-artwork"].front_shiny,
      },
    };

    //zod för att pokemon variabeln ska inehålla rätt saker / inte sakna något?
    setState(pokemon);
  }

  useEffect(() => {
    if (id) {
      getData(id, setData);
    }
  }, [id]);

  useMemo(() => {
    if (data?.id) {
      data.id !== 1 && getData((data.id - 1).toString(), setPrevPokemon);
      // ev. sätt gränsen efter sista pokemonen i pokedexen istället får ett nummer
      // för ev nya pokemon (+ för next knappen)
      data.id !== 1025 && getData((data.id + 1).toString(), setNextPokemon);
    }
  }, [data]); // hämta förra och nästa och extrahera sprite, namn och ev. nummer

  return data ? (
    <div className="flex flex-col gap-2 bg-gray-950 max-w-5xl m-auto mt-2">
      <Link
        href={"/"}
        className="flex items-center"
      >
        {"< "}Back to Search
      </Link>
      <div className="flex gap-2 items-center">
        <PokemonSearch />
        <Random />
      </div>
      <PokemonInfo data={data} />
      <div className="flex justify-between">
        {data.id !== 1 && (
          <Link
            rel="stylesheet"
            href={`${data.id - 1}`}
          >
            <div className="flex items-center">
              {"< "}
              {prevPokemon
                ? `#${prevPokemon.id} ${prevPokemon.name
                    .charAt(0)
                    .toUpperCase()}${prevPokemon.name.slice(1)}`
                : "previous"}
              <img
                className="h-6 pl-2"
                src={prevPokemon?.artwork.default}
                alt="previous pokemon sprite"
              />
            </div>
          </Link>
        )}
        {data.id !== 1025 && (
          <Link
            rel="stylesheet"
            href={`${data.id + 1}`}
          >
            <div className="flex items-center">
              <img
                className="h-6 pr-2"
                src={nextPokemon?.artwork.default}
                alt="next pokemon sprite"
              />
              {nextPokemon
                ? `#${nextPokemon.id} ${nextPokemon.name
                    .charAt(0)
                    .toUpperCase()}${nextPokemon.name.slice(1)}`
                : "next"}
              {" >"}
            </div>
          </Link>
        )}
      </div>
    </div>
  ) : (
    <>
      <Link href={"/"}>Back to Search</Link>
      <div>Loading...</div>
    </>
  );
}
