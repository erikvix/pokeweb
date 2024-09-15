"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { typeIcons, PokemonType, Pokemon } from "../types/TypeBadge";
import { Progress } from "@/components/ui/progress";
import { ChartComponent } from "@/components/custom/RadarChart";

const renderType = (types: Array<{ type: { name: PokemonType } }>) => {
  return (
    <div className="flex flex-col gap-2">
      {types.map((typeUnit, index) => {
        const typeString = typeUnit.type.name;

        return (
          <Badge
            className={`space-x-1 hover:bg-${typeIcons[typeString].color}/90 text-foreground bg-${typeIcons[typeString].color}`}
            key={index}
          >
            {getPokemonType(typeString) && typeIcons[typeString].icon}
            <span>{typeString}</span>
          </Badge>
        );
      })}
    </div>
  );
};

function getPokemonType(type: string): type is PokemonType {
  return type in typeIcons;
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetPokemon = () => {
    setError(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Pokémon not found");
        }
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
        setPokemon(null);
      });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1>Pokémon Search</h1>
        <div className="flex gap-2">
          <Input onChange={(e) => setSearch(e.target.value)} value={search} />
          <Button onClick={handleGetPokemon}>Search</Button>
        </div>
      </header>
      <div className="max-w-sm mx-auto">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : pokemon ? (
          <Card key={pokemon.id} className="min-w-80 overflow-hidden">
            <CardHeader className="pb-2 capitalize">
              <CardTitle className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <p className="text-muted-foreground">{pokemon.id}</p>
                  <p className="text-xl">{pokemon.name}</p>
                </div>
                {renderType(pokemon.types)}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <div className="flex justify-center p-4">
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="grid grid-cols-2 px-4 gap-2">
                <div>
                  <p className="text-gray-400">Height</p>
                  <p>2m</p>
                </div>
                <div>
                  <p className="text-gray-400">Weight</p>
                  <p>20kg</p>
                </div>
              </div>
              <div>
                <ChartComponent />
              </div>
            </CardContent>
          </Card>
        ) : (
          <p>No Pokémon found</p>
        )}
      </div>
    </div>
  );
}
