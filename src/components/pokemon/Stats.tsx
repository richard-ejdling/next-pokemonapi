import { Pokemon } from "@/types/types";

type PokemonStats = Pick<Pokemon, "stats">;

export default function Stats({ stats }: PokemonStats) {
  const { hp, attack, defence, special_attack, special_defence, speed } = {
    ...stats,
  };
  const total = hp + attack + defence + special_attack + special_defence + speed;
  return (
    <div className="flex h-full p-4 gap-2">
      <div className="flex flex-col justify-between h-full w-fit">
        <h4 className="">Total</h4>
        <h4 className="">HP</h4>
        <h4 className="">Attack</h4>
        <h4 className="">Defence</h4>
        <h4 className="">Sp. Atk</h4>
        <h4 className="">Sp. Def</h4>
        <h4 className="">Speed</h4>
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex">
          <span className="ml-1">{total}</span>
        </div>
        <div className="flex">
          {/* <h4 className="w-[10%]">HP</h4> */}
          <div
            className={`bg-red-500 text-right pr-2`}
            style={{ width: `${(100 / 255) * hp}%` }}
          ></div>
          <span className="ml-1">{hp}</span>
        </div>
        <div className="flex">
          {/* <h4 className="w-[10%]">Attack</h4> */}
          <div
            className={`bg-orange-500 text-right pr-2`}
            style={{ width: `${(100 / 255) * attack}%` }}
          ></div>
          <span className="ml-1">{attack}</span>
        </div>
        <div className="flex">
          {/* <h4 className="w-[10%]">Defence</h4> */}
          <div
            className={`bg-yellow-500 text-right pr-2`}
            style={{ width: `${(100 / 255) * defence}%` }}
          ></div>
          <span className="ml-1">{defence}</span>
        </div>
        <div className="flex">
          {/* <h4 className="w-[10%]">Sp. Atk</h4> */}
          <div
            className={`bg-blue-500 text-right pr-2`}
            style={{ width: `${(100 / 255) * special_attack}%` }}
          ></div>
          <span className="ml-1">{special_attack}</span>
        </div>
        <div className="flex">
          {/* <h4 className="w-[10%]">Sp. Def</h4> */}
          <div
            className={`bg-green-500 text-right pr-2`}
            style={{ width: `${(100 / 255) * special_defence}%` }}
          ></div>
          <span className="ml-1">{special_defence}</span>
        </div>
        <div className="flex">
          {/* <h4 className="w-[10%]">Speed</h4> */}
          <div
            className={`bg-pink-500 text-right pr-2`}
            style={{ width: `${(100 / 255) * speed}%` }}
          ></div>
          <span className="ml-1">{speed}</span>
        </div>
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
