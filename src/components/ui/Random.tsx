import { useRouter } from "next/router";

export default function Random({ route = "" }: { route?: string }) {
  const router = useRouter();

  const max = 1025;
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
