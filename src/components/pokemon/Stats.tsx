import { Pokemon } from "@/types/types";

type PokemonStats = Pick<Pokemon, "stats">;

export default function Stats({ stats }: PokemonStats) {
  const { hp, attack, defence, special_attack, special_defence, speed } = {
    ...stats,
  };

  const total = hp + attack + defence + special_attack + special_defence + speed;

  return (
    <div className="flex h-full p-4 gap-2">
      <div className="flex flex-col justify-between h-full w-full">
        <div className="flex">
          <h4 className="w-[120px] shrink-0">Total</h4>
          <span className="">{total}</span>
        </div>
        <div className="flex items-end">
          <h4 className="w-[120px] shrink-0">HP</h4>
          <div
            className={`flex justify-end items-end bg-red-500 text-end h-5`}
            style={{
              width: `${(100 / 255) * hp}%`,
            }}
          >
            <span
              /* className={`${hp <= 45 && "hidden"} sm:hidden`} */
              style={{
                textShadow:
                  "1px 1px black, 1.25px 1.25px black, 1.5px 1.5px black, 1.75px 1.75px black, 2px 2px black",
              }}
            >
              {hp}
            </span>
          </div>
          {/* <span className={`w-[58px] ml-1 ${hp > 45 ? "max-sm:text-transparent" : ""}`}>{hp}</span> */}
        </div>
        <div className="flex items-end">
          <h4 className="w-[120px] shrink-0">Attack</h4>
          <div
            className={`flex justify-end items-end bg-orange-500  text-end h-5`}
            style={{
              width: `${(100 / 255) * attack}%`,
            }}
          >
            <span
              /* className={`${attack <= 45 && "hidden"} sm:hidden`} */
              style={{
                textShadow:
                  "1px 1px black, 1.25px 1.25px black, 1.5px 1.5px black, 1.75px 1.75px black, 2px 2px black",
              }}
            >
              {attack}
            </span>
          </div>
          {/* <span className={`w-[58px] ml-1 ${attack > 45 ? "max-sm:text-transparent" : ""}`}>
            {attack}
          </span> */}
        </div>
        <div className="flex items-end">
          <h4 className="w-[120px] shrink-0">Defence</h4>
          <div
            className={`flex justify-end items-end bg-yellow-500  text-end h-5`}
            style={{
              width: `${(100 / 255) * defence}%`,
            }}
          >
            <span
              /* className={`${defence <= 45 && "hidden"} sm:hidden`} */
              style={{
                textShadow:
                  "1px 1px black, 1.25px 1.25px black, 1.5px 1.5px black, 1.75px 1.75px black, 2px 2px black",
              }}
            >
              {defence}
            </span>
          </div>
          {/* <span className={`w-[58px] ml-1 ${defence > 45 ? "max-sm:text-transparent" : ""}`}>
            {defence}
          </span> */}
        </div>
        <div className="flex items-end">
          <h4 className="w-[120px] shrink-0">Sp. Atk</h4>
          <div
            className={`flex justify-end items-end bg-blue-500  text-end h-5`}
            style={{
              width: `${(100 / 255) * special_attack}%`,
            }}
          >
            <span
              /* className={`${special_attack <= 45 && "hidden"} sm:hidden`} */
              style={{
                textShadow:
                  "1px 1px black, 1.25px 1.25px black, 1.5px 1.5px black, 1.75px 1.75px black, 2px 2px black",
              }}
            >
              {special_attack}
            </span>
          </div>
          {/* <span className={`w-[58px] ml-1 ${special_attack > 45 ? "max-sm:text-transparent" : ""}`}>
            {special_attack}
          </span> */}
        </div>
        <div className="flex items-end">
          <h4 className="w-[120px] shrink-0">Sp. Def</h4>
          <div
            className={`flex justify-end items-end bg-green-500  text-end h-5`}
            style={{
              width: `${(100 / 255) * special_defence}%`,
            }}
          >
            <span
              /* className={`${special_defence <= 45 && "hidden"} sm:hidden`} */
              style={{
                textShadow:
                  "1px 1px black, 1.25px 1.25px black, 1.5px 1.5px black, 1.75px 1.75px black, 2px 2px black",
              }}
            >
              {special_defence}
            </span>
          </div>
          {/* <span
            className={`w-[58px] ml-1 ${special_defence > 45 ? "max-sm:text-transparent" : ""}`}
          >
            {special_defence}
          </span> */}
        </div>
        <div className="flex items-end">
          <h4 className="w-[120px] shrink-0">Speed</h4>
          <div
            className={`flex justify-end items-end bg-pink-500  text-end h-5`}
            style={{
              width: `${(100 / 255) * speed}%`,
            }}
          >
            <span
              /* className={`${speed <= 45 && "hidden"} sm:hidden`} */
              style={{
                textShadow:
                  "1px 1px black, 1.25px 1.25px black, 1.5px 1.5px black, 1.75px 1.75px black, 2px 2px black",
              }}
            >
              {speed}
            </span>
          </div>
          {/* <span className={`w-[58px] ml-1 ${speed > 45 ? "max-sm:text-transparent" : ""}`}>
            {speed}
          </span> */}
        </div>
      </div>
    </div>
  );
}
