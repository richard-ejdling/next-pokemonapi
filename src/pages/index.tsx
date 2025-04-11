import PokemonSearch from "@/components/ui/PokemonSearch";
import Random from "@/components/ui/Random";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-4 h-[80vh] gap-10">
      <h1 className="lg:w-1/2" aria-label="Poké A P I Page">
        <a href="https://www.textstudio.com/" aria-label="Visit the site were this logo was made">
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
