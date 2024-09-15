export type PokemonType =
  | "electric"
  | "water"
  | "fire"
  | "grass"
  | "poison"
  | "flying"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fairy"
  | "fighting"
  | "psychic"
  | "ice"
  | "dark"
  | "dragon"
  | "normal";

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{ type: { name: PokemonType } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
