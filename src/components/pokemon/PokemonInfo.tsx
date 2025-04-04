import { Pokemon } from "@/types/types";
import Stats from "./Stats";
import HeightWeight from "./HeightWeight";
import PokémonTypes from "./PokémonTypes";

export default function PokemonInfo({ data }: { data: Pokemon }) {
  const { id, name, types, abilities, weight, height, stats, artwork } = data;

  const baseStyle = "bg-gray-600 rounded-lg h-60";

  return (
    <div className="flex flex-col gap-4 bg-gray-800 rounded-lg p-4">
      <h2>{`#${id} ${name.charAt(0).toUpperCase()}${name.slice(1)}`}</h2>
      <div className="grid gap-4 grid-cols-4 grid-rows-2">
        <div className={`${baseStyle} col-start-1 row-start-1 flex flex-col items-center`}>
          <h3 className="mt-1 underline">Normal</h3>
          <img
            className="h-2 grow object-contain"
            src={artwork.default}
            alt="Normal"
          />
        </div>
        <div className={`${baseStyle} col-start-1 row-start-2 flex flex-col items-center`}>
          <h3 className="mt-1 underline">Shiny</h3>
          <img
            className="h-2 grow object-contain"
            src={artwork.shiny}
            alt="Shiny"
          />
        </div>
        <div className={`${baseStyle}`}>
          <PokémonTypes types={types} />
        </div>
        <div className={`${baseStyle} flex flex-col items-center`}>
          <h3 className="mt-1 underline">Abilities</h3>
          <ul className="flex flex-col justify-center grow">
            {abilities.map((ability, index) => {
              return (
                <li
                  className=""
                  key={index}
                >
                  {ability.charAt(0).toUpperCase()}
                  {ability.slice(1)}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`${baseStyle}`}>
          <HeightWeight
            height={height}
            weight={weight}
            artwork={artwork.default}
          />
        </div>
        <div className={`${baseStyle} col-start-2 col-span-3 row-start-2`}>
          <Stats stats={stats} />
        </div>
      </div>
    </div>
  );
}
