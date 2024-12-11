type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

type Shades = {
  main: string;
  darker: string;
  lighter: string;
};

const typeColors: {
  [key in PokemonType]: Shades;
} = {
  normal: { main: "bg-[#A8A77A]", lighter: "border-t-[#C4C491]", darker: "border-b-[#8A895F]" },
  fire: { main: "bg-[#EE8130]", lighter: "border-t-[#FFA64A]", darker: "border-b-[#C56627]" },
  water: { main: "bg-[#6390F0]", lighter: "border-t-[#8CABF5]", darker: "border-b-[#4E72C4]" },
  electric: { main: "bg-[#F7D02C]", lighter: "border-t-[#FFE051]", darker: "border-b-[#C7A822]" },
  grass: { main: "bg-[#7AC74C]", lighter: "border-t-[#A7D08D]", darker: "border-b-[#6A9C3E]" },
  ice: { main: "bg-[#96D9D6]", lighter: "border-t-[#B7E1E1]", darker: "border-b-[#71A8A4]" },
  fighting: { main: "bg-[#C22E28]", lighter: "border-t-[#D85D51]", darker: "border-b-[#9A1C1B]" },
  poison: { main: "bg-[#A33EA1]", lighter: "border-t-[#BC60D8]", darker: "border-b-[#7A2E7A]" },
  ground: { main: "bg-[#E2BF65]", lighter: "border-t-[#F4D373]", darker: "border-b-[#C9A054]" },
  flying: { main: "bg-[#A98FF3]", lighter: "border-t-[#B9B8F6]", darker: "border-b-[#7A77D3]" },
  psychic: { main: "bg-[#F95587]", lighter: "border-t-[#FF6D9D]", darker: "border-b-[#D04C6E]" },
  bug: { main: "bg-[#A6B91A]", lighter: "border-t-[#C3D746]", darker: "border-b-[#8C9C16]" },
  rock: { main: "bg-[#B6A136]", lighter: "border-t-[#D8C64D]", darker: "border-b-[#8E7D2C]" },
  ghost: { main: "bg-[#735797]", lighter: "border-t-[#8D66A8]", darker: "border-b-[#5F4774]" },
  dragon: { main: "bg-[#6F35FC]", lighter: "border-t-[#8E70FF]", darker: "border-b-[#5A2AE8]" },
  dark: { main: "bg-[#705746]", lighter: "border-t-[#7F6A53]", darker: "border-b-[#4E3B31]" },
  /* dark: { main: "bg-[#4B4B4B]", lighter: "border-t-[#7A7A7A]", darker: "border-b-[#2E2E2E]" }, */
  /* dark: { main: "bg-[#585454]", lighter: "border-t-[#7D7A76]", darker: "border-b-[#3C3A36]" }, */
  steel: { main: "bg-[#B7B7CE]", lighter: "border-t-[#D0D0DB]", darker: "border-b-[#8F8F9A]" },
  fairy: { main: "bg-[#D685D2]", lighter: "border-t-[#F4A4F6]", darker: "border-b-[#A65D92]" },
};

export default function ({ types }: { types: string[] }) {
  return (
    <div className="flex flex-col items-center h-full">
      <h3 className="mt-1 underline">Types</h3>
      <ul className="flex flex-col justify-center gap-2 grow">
        {types.map((type, index) => {
          const {
            main: bg,
            darker: borderB,
            lighter: borderT,
          }: Shades = typeColors[type as PokemonType];
          return (
            <li
              className={`font-semibold ${bg} border-t border-b ${borderB} ${borderT}  w-20 px-1 rounded-[3px] text-center`}
              style={{textShadow: "1px 1px dimgrey"}}
              key={index}
            >
              {type.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
