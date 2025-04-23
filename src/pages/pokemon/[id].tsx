import PokemonInfo from "@/components/pokemon/PokemonInfo";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SetStateAction, useEffect, useMemo, useState } from "react";
import type { Pokemon } from "@/types/types";
import { fetcher } from "@/utils/fetcher";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import PokemonSearch from "@/components/ui/PokemonSearch";
import Random from "@/components/ui/Random";
import PrevNext from "@/components/ui/PrevNext";
import { useQueries, useQuery } from "react-query";
import LoaderPokemonInfo from "@/components/ui/LoaderPokemonInfo";

/* const fetcher = async (id: number | string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}; */

export default function Pokemon() {
  const [data, setData] = useState<Pokemon>();

  const router = useRouter();
  const id = router.query.id as string;

  /* async function getData(
    id: string,
    setState: React.Dispatch<SetStateAction<Pokemon | undefined>>
  ) {
    const data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
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
  } */

  function createPokemon(data: any) {
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
    setData(pokemon);
  }

  const { isLoading, error } = useQuery(
    ["pokemon", id],
    () => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => data.json()),
    {
      enabled: !!id,
      onSuccess: (data) => {
        /* console.log("User fetched!", data.name); */
        createPokemon(data);
      },
      onError: (error) => console.error(error),
    }
  );

  /* useEffect(() => {
    if (id) {
      getData(id, setData);
    }
  }, [id]); */

  return (
    <div className="flex flex-col gap-2 bg-gray-950 max-w-5xl m-auto my-2 max-lg:mx-2">
      <Link
        href={"/"}
        className="flex items-center"
      >
        {"< "}Back to Search
      </Link>
      <div className="flex gap-2 items-center flex-wrap">
        <PokemonSearch />
        <Random />
      </div>

      {error ? (
        <p>
          Something went wrong. <br />
          Please try again or adjust your search.
        </p>
      ) : !isLoading && data ? (
        <>
          <PrevNext id={data.id} />
          <PokemonInfo data={data} />
          <PrevNext id={data.id} />
        </>
      ) : (
        <LoaderPokemonInfo />
      )}
    </div>
  );
}
