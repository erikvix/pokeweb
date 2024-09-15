import {
  Zap,
  Droplet,
  Flame,
  Leaf,
  Skull,
  Feather,
  Snowflake,
  Bug,
  Mountain,
  Shield,
  Grape,
  Sword,
  Bolt,
  Ghost,
  Star,
  Sparkles,
  Target,
  Eye,
} from "lucide-react";
import { FaHandFist as Fist } from "react-icons/fa6";
import { GiSeaDragon, GiSpikedDragonHead } from "react-icons/gi";

export const typeIcons: Record<
  PokemonType,
  { color: string; icon: JSX.Element }
> = {
  electric: {
    color: "yellow-400",
    icon: <Zap className="h-4 w-4" />,
  },
  water: {
    color: "blue-500",
    icon: <Droplet className="h-4 w-4" />,
  },
  fire: {
    color: "orange-500",
    icon: <Flame className="h-4 w-4" />,
  },
  grass: {
    color: "green-500",
    icon: <Leaf className="h-4 w-4" />,
  },
  poison: {
    color: "purple-600",
    icon: <Skull className="h-4 w-4" />,
  },
  flying: {
    color: "indigo-400",
    icon: <Feather className="h-4 w-4" />,
  },
  ground: {
    color: "yellow-600",
    icon: <Mountain className="h-4 w-4" />,
  },
  rock: {
    color: "yellow-700",
    icon: <Shield className="h-4 w-4" />,
  },
  bug: {
    color: "lime-600",
    icon: <Bug className="h-4 w-4" />,
  },
  ghost: {
    color: "purple-800",
    icon: <Ghost className="h-4 w-4" />,
  },
  steel: {
    color: "gray-400",
    icon: <Bolt className="h-4 w-4 " />,
  },
  fairy: {
    color: "pink-400",
    icon: <Star className="h-4 w-4" />,
  },
  fighting: {
    color: "red-600",
    icon: <Fist className="h-4 w-4" />,
  },
  psychic: {
    color: "pink-600",
    icon: <Eye className="h-4 w-4" />,
  },
  ice: {
    color: "cyan-300",
    icon: <Snowflake className="h-4 w-4" />,
  },
  dark: {
    color: "gray-800",
    icon: <Target className="h-4 w-4" />,
  },
  dragon: {
    color: "purple-600",
    icon: <GiSpikedDragonHead className="h-4 w-4" />,
  },
  normal: {
    color: "gray-500",
    icon: <Sparkles className="h-4 w-4" />,
  },
};

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
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};
