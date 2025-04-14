export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  weight: number;
  height: number;
  stats: {
    hp: number;
    attack: number;
    defence: number;
    special_attack: number;
    special_defence: number;
    speed: number;
  };
  artwork: {
    default: string;
    shiny: string;
  };
};
export type PrevNextPokemon = { id: number; name: string; artwork: string };
