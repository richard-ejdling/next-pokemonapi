import Link from "next/link";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(search){
      router.push(`pokemon/${search}`);
    }
  }

  return (
    <div>
      <h1>Index</h1>
      {/* <Link href={'pokemon/94'}>Get Gengar</Link> */}
      <form onSubmit={handleSearch}>
        <label htmlFor="pokemon-search">Pokemon name or #</label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="text-black"
          type="text"
          id="pokemon-search"
          name="pokemon"
        />
        <button>Search</button>
      </form>
    </div>
  );
}
