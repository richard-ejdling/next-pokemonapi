import PokemonSearch from "@/components/ui/PokemonSearch";


export default function Home() {

  return (
    <div>
      <h1>Index</h1>
      {/* <Link href={'pokemon/94'}>Get Gengar</Link> */}
      <PokemonSearch route = {"pokemon"}/>
    </div>
  );
}
