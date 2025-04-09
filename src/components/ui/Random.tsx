import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Random({ route = "" }: { route?: string }) {
  const router = useRouter();

  const [entries, setEntries] = useState(1025);

  async function getEntriesNr() {
    const data = await fetcher("https://pokeapi.co/api/v2/pokedex/1/");
    data && typeof data.pokemon_entries && setEntries(data.pokemon_entries.number);
  }

  useEffect(() => {
    getEntriesNr();
  }, []);

  const max = entries ? entries : 1025;
  function randomPokemon() {
    const randomNr = Math.floor(Math.random() * max) + 1;

    router.push(route ? `${route}/${randomNr}` : `${randomNr}`);
  }

  return (
    <button
      onClick={randomPokemon}
      className="h-fit border-2 border-dashed rounded-md px-2 pb-1 hover:bg-gray-800 active:bg-gray-600"
    >
      Random Pokémon
    </button>
  );
}
