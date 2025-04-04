import { useRouter } from "next/router";
import { useState } from "react";

export default function PokemonSearch({ label, route="" }: { label?: string, route?: string }) {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (search) {
      router.push(route ? `${route}/${search}`: search);
    }
  }
  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="pokemon-search">{label}</label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="text-black rounded-lg px-2 py-1 w-80 border-[6px] border-double border-black"
        type="text"
        id="pokemon-search"
        name="pokemon"
        placeholder="Name or Number"
      />
      <button className="ml-2">Search</button>
    </form>
  );
}
