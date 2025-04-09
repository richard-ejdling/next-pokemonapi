import PokemonSearch from "@/components/ui/PokemonSearch";
import Random from "@/components/ui/Random";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-4 h-[80vh] gap-10">
      <h1 className="lg:w-1/2">
        <a href="https://www.textstudio.com/">
          {" "}
          <img
            src="/img/title-40.png"
            alt=""
          />
        </a>
      </h1>
      <PokemonSearch
        route={"pokemon"}
        center={true}
      />
      <Random route="pokemon" />
    </div>
  );
}
