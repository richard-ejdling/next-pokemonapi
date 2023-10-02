import PokemonInfo from "@/components/PokemonInfo";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pokemon } from "@/types/types";

export default function Pokemon() {
  const [data, setData] = useState<Pokemon | null>(null);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const responeData = await response.json();
      console.log(responeData);
      // error om fel id skickats/ inte fått svar tillbaka: ex if(response.ok){} else nånting(response.status) osv.

      const pokemon: Pokemon = {
        id: responeData.id,
        name: responeData.name,
        types: responeData.types.map((type: any) => type.type.name),
        abilities: responeData.abilities.map(
          (ability: any) => ability.ability.name
        ),
        weight: responeData.weight,
        height: responeData.height,
        stats: {
          hp: responeData.stats[0].base_stat,
          attack: responeData.stats[1].base_stat,
          defence: responeData.stats[2].base_stat,
          special_attack: responeData.stats[3].base_stat,
          special_defence: responeData.stats[4].base_stat,
          speed: responeData.stats[5].base_stat,
        },
        artwork: {
          default: responeData.sprites.other["official-artwork"].front_default,
          shiny: responeData.sprites.other["official-artwork"].front_shiny,
        },
      };

      //zod för att pokemon variabeln ska inehålla rätt saker / inte sakna något?
      setData(pokemon);
    }

    if (id) {
      getData();
    }
  }, [id]);

  return data ? (
    <div>
      <PokemonInfo data={data} />
      <div className="flex gap-2">
        <Link rel="stylesheet" href={`${data.id - 1}`}>
          {"< Previous"}
        </Link>
        <Link rel="stylesheet" href={`${data.id + 1}`}>
          {"Next >"}
        </Link>
      </div>
    </div>
  ) : (
    <div>Loading...</div> // visa om något gått fel
  );
}
