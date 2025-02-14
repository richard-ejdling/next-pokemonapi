import { useEffect, useState } from "react";

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
  bg: string;
  borderB: string;
  borderT: string;
};

type DamageRelations = {
  no_damage_to: [
    {
      name: string;
      url: string;
    }
  ];
  half_damage_to: [
    {
      name: string;
      url: string;
    }
  ];
  double_damage_to: [
    {
      name: string;
      url: string;
    }
  ];
  no_damage_from: [
    {
      name: string;
      url: string;
    }
  ];
  half_damage_from: [
    {
      name: string;
      url: string;
    }
  ];
  double_damage_from: [
    {
      name: string;
      url: string;
    }
  ];
};

const typeColors: {
  [key in PokemonType]: Shades;
} = {
  normal: { bg: "bg-[#A8A77A]", borderT: "border-t-[#C4C491]", borderB: "border-b-[#8A895F]" },
  fire: { bg: "bg-[#EE8130]", borderT: "border-t-[#FFA64A]", borderB: "border-b-[#C56627]" },
  water: { bg: "bg-[#6390F0]", borderT: "border-t-[#8CABF5]", borderB: "border-b-[#4E72C4]" },
  electric: { bg: "bg-[#F7D02C]", borderT: "border-t-[#FFE051]", borderB: "border-b-[#C7A822]" },
  grass: { bg: "bg-[#7AC74C]", borderT: "border-t-[#A7D08D]", borderB: "border-b-[#6A9C3E]" },
  ice: { bg: "bg-[#96D9D6]", borderT: "border-t-[#B7E1E1]", borderB: "border-b-[#71A8A4]" },
  fighting: { bg: "bg-[#C22E28]", borderT: "border-t-[#D85D51]", borderB: "border-b-[#9A1C1B]" },
  poison: { bg: "bg-[#A33EA1]", borderT: "border-t-[#BC60D8]", borderB: "border-b-[#7A2E7A]" },
  ground: { bg: "bg-[#E2BF65]", borderT: "border-t-[#F4D373]", borderB: "border-b-[#C9A054]" },
  flying: { bg: "bg-[#A98FF3]", borderT: "border-t-[#B9B8F6]", borderB: "border-b-[#7A77D3]" },
  psychic: { bg: "bg-[#F95587]", borderT: "border-t-[#FF6D9D]", borderB: "border-b-[#D04C6E]" },
  bug: { bg: "bg-[#A6B91A]", borderT: "border-t-[#C3D746]", borderB: "border-b-[#8C9C16]" },
  rock: { bg: "bg-[#B6A136]", borderT: "border-t-[#D8C64D]", borderB: "border-b-[#8E7D2C]" },
  ghost: { bg: "bg-[#735797]", borderT: "border-t-[#8D66A8]", borderB: "border-b-[#5F4774]" },
  dragon: { bg: "bg-[#6F35FC]", borderT: "border-t-[#8E70FF]", borderB: "border-b-[#5A2AE8]" },
  dark: { bg: "bg-[#705746]", borderT: "border-t-[#7F6A53]", borderB: "border-b-[#4E3B31]" },
  /* dark: { bg: "bg-[#4B4B4B]", borderT: "border-t-[#7A7A7A]", borderB: "border-b-[#2E2E2E]" }, */
  /* dark: { bg: "bg-[#585454]", borderT: "border-t-[#7D7A76]", borderB: "border-b-[#3C3A36]" }, */
  steel: { bg: "bg-[#B7B7CE]", borderT: "border-t-[#D0D0DB]", borderB: "border-b-[#8F8F9A]" },
  fairy: { bg: "bg-[#D685D2]", borderT: "border-t-[#F4A4F6]", borderB: "border-b-[#A65D92]" },
};

export default function PokémonTypes ({ types }: { types: string[] }) {
  const [typeData, setTypeData] = useState<DamageRelations[]>([]);

  useEffect(() => {
    async function fetchData(type: string) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch {}
    }

    function handleFetch() {
      types.forEach((type) => {
        fetchData(type);
      });
    }

    handleFetch();
  }, [types]);

  return (
    <div className="flex flex-col items-center h-full">
      <h3 className="mt-1 underline">Types</h3>
      <ul className="flex flex-col justify-center gap-2 grow">
        {types.map((type, index) => {
          const { bg, borderB, borderT }: Shades = typeColors[type as PokemonType];
          return (
            <li
              className={`font-semibold ${bg} border-t border-b ${borderB} ${borderT}  w-20 px-1 rounded-[3px] text-center`}
              style={{ textShadow: "1px 1px dimgrey" }}
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
