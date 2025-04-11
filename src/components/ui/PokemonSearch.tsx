import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function PokemonSearch({
  label = "Search pokemon name or number",
  visLabel = false,
  route = "",
  center = false,
}: {
  label?: string;
  visLabel?: boolean;
  route?: string;
  center?: boolean;
}) {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (search) {
      router.push(route ? `${route}/${search}` : search);
    }

    inputRef.current?.blur();
  }

  return (
    <form
      onSubmit={handleSearch}
      className={`flex items-center flex-wrap gap-2 ${center && "justify-center"}`}
    >
      <label
        htmlFor="pokemon-search"
        className={`${!visLabel && "sr-only"}`}
      >
        {label}
      </label>
      <input
        onChange={(e) => setSearch(e.target.value.replace(" ", "-"))}
        className="text-black rounded-lg px-2 py-1 w-72 border-[6px] border-double border-black"
        type="text"
        id="pokemon-search"
        name="pokemon"
        placeholder="Name or Number"
        ref={inputRef}
      />
      <button className="border-2 border-dashed rounded-md px-2 pb-1 hover:bg-gray-800 active:bg-gray-600 select-none">
        Search
      </button>
    </form>
  );
}
