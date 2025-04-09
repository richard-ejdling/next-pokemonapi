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
      <div className="grid gap-4 grid-cols-6 max-[400px]:grid-rows-5 max-[770px]:grid-rows-4 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2">
        <div
          className={`${baseStyle} col-start-1 row-start-1 max-lg:col-span-3 flex flex-col items-center`}
        >
          <h3 className="mt-1 underline">Normal</h3>
          <img
            className="h-2 grow object-contain"
            src={artwork.default}
            alt="Normal"
          />
        </div>
        <div
          className={`${baseStyle} col-start-4 row-start-1 max-lg:col-span-3 lg:col-start-1 lg:row-start-2 flex flex-col items-center`}
        >
          <h3 className="mt-1 underline">Shiny</h3>
          <img
            className="h-2 grow object-contain"
            src={artwork.shiny}
            alt="Shiny"
          />
        </div>
        <div
          className={`${baseStyle} max-[400px]:col-span-6 max-[770px]:col-span-3 max-lg:col-start-1 max-lg:row-start-2 max-lg:col-span-2`}
        >
          <PokémonTypes types={types} />
        </div>
        <div
          className={`${baseStyle} max-[400px]:col-span-6 max-[400px]:row-start-3 max-[770px]:col-start-4 max-[770px]:col-span-3 max-lg:col-start-3 max-lg:row-start-2 max-lg:col-span-2 flex flex-col items-center px-2`}
        >
          <h3 className="mt-1 underline">Abilities</h3>
          <ul className="flex flex-col justify-center h-full gap-2 w-full list-disc pl-6">
            {abilities.map((ability, index) => {
              return (
                <li
                  className="break-words"
                  key={index}
                >
                  {ability.charAt(0).toUpperCase() + ability.slice(1)}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`${baseStyle} max-[400px]:row-start-4 max-[770px]:row-start-3 max-[770px] max-[770px]:col-span-6 max-lg:col-start-5 max-lg:row-start-2 max-lg:col-span-2`}
        >
          <HeightWeight
            height={height}
            weight={weight}
            artwork={artwork.default}
          />
        </div>
        <div
          className={`${baseStyle} max-[400px]:row-start-5 max-[770px]:row-start-4 col-span-6 lg:col-start-2 lg:col-span-3 lg:row-start-2`}
        >
          <Stats stats={stats} />
        </div>
      </div>
    </div>
  );
}
