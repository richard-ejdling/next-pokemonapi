import PokemonSearch from "@/components/ui/PokemonSearch";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-10">
      <h1 className="w-1/2">
        <a href="https://www.textstudio.com/">
          {" "}
          <img
            src="/img/title-40.png"
            alt=""
          />
        </a>
      </h1>
      <PokemonSearch route={"pokemon"} />
    </div>
  );
}
