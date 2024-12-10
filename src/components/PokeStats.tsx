import { Pokemon } from "@/types/types";

type PokemonStats = Pick<Pokemon, "stats">;

export default function PokemonStats({ stats }: PokemonStats) {
  const { hp, attack, defence, special_attack, special_defence, speed } = {
    ...stats,
  };
  return (
    <div className="flex flex-col justify-evenly h-full p-4">
      <div className="flex">
        <h4 className="w-[10%]">HP</h4>
        <div
          className={`bg-red-500 text-right pr-2`}
          style={{ width: `${(80 / 255) * hp}%` }}
        ></div>
        <span className="ml-1">{hp}</span>
      </div>
      <div className="flex">
        <h4 className="w-[10%]">Attack</h4>
        <div
          className={`bg-orange-500 text-right pr-2`}
          style={{ width: `${(80 / 255) * attack}%` }}
        ></div>
        <span className="ml-1">{attack}</span>
      </div>
      <div className="flex">
        <h4 className="w-[10%]">Defence</h4>
        <div
          className={`bg-yellow-500 text-right pr-2`}
          style={{ width: `${(80 / 255) * defence}%` }}
        ></div>
        <span className="ml-1">{defence}</span>
      </div>
      <div className="flex">
        <h4 className="w-[10%]">Sp. Atk</h4>
        <div
          className={`bg-blue-500 text-right pr-2`}
          style={{ width: `${(80 / 255) * special_attack}%` }}
        ></div>
        <span className="ml-1">{special_attack}</span>
      </div>
      <div className="flex">
        <h4 className="w-[10%]">Sp. Def</h4>
        <div
          className={`bg-green-500 text-right pr-2`}
          style={{ width: `${(80 / 255) * special_defence}%` }}
        ></div>
        <span className="ml-1">{special_defence}</span>
      </div>
      <div className="flex">
        <h4 className="w-[10%]">Speed</h4>
        <div
          className={`bg-pink-500 text-right pr-2`}
          style={{ width: `${(80 / 255) * speed}%` }}
        ></div>
        <span className="ml-1">{speed}</span>
      </div>
      {/* <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defence: {defence}</p>
      <p>Sp. Atk: {special_attack}</p>
      <p>Sp. Def: {special_defence}</p>
      <p>Speed: {speed}</p> */}
    </div>
  );
}
