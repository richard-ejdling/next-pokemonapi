import PokemonInfo from "@/components/PokemonInfo";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import type { Pokemon } from "@/types/types";
import type { NextPrevPokemon } from "@/types/types";
import { fetcher } from "@/utils/fetcher";

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

  useEffect(() => {
    async function getData() {
      /* const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const responeData = await response.json(); */
      const data = await fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(data);
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
      setData(pokemon);
    }

    if (id) {
      getData();
    }
  }, [id]);

  useMemo(() => {
    if (data) {
      console.log("hello", data?.id);
    }
  }, [data]); // hämta förra och nästa och extrahera sprite, namn och ev. nummer

  return data ? (
    <div>
      <Link href={"/"}>Back to Search</Link>
      <PokemonInfo data={data} />
      <div className="flex gap-2">
        <Link
          rel="stylesheet"
          href={`${data.id - 1}`}
        >
          {"< Previous"}
        </Link>
        <Link
          rel="stylesheet"
          href={`${data.id + 1}`}
        >
          {"Next >"}
        </Link>
      </div>
    </div>
  ) : (
    <>
      <Link href={"/"}>Back to Search</Link>
      <div>Loading...</div>
    </>
  );
}
