import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Random({ route = "" }: { route?: string }) {
  const router = useRouter();
  const defaultEntries = 1025;
  const [entries, setEntries] = useState(1025);

  async function getEntriesNr() {
    const data = await fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then((res) => {
        if (!res.ok) {
          console.error(
            `Couldn't fetch latest pokemon: ${res.status}. 'Next pokemon' button capped at ${defaultEntries}`
          );
        }
        return res.json();
      })
      .catch((error) =>
        console.error(
          `Couldn't fetch latest pokemon: ${error.message}. 'Next pokemon' button capped at ${defaultEntries}`
        )
      );

    data && setEntries(data.pokemon_entries.length);
  }

  useEffect(() => {
    getEntriesNr();
  }, []);

  const max = entries ? entries : defaultEntries;
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
