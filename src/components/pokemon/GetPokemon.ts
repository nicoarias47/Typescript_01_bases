import { Pokemon } from "../../interfaces/pokemons";
import { printPokemon } from "./PrintPokemons";
let pokemons: Pokemon[] = [];

export const getPokemon = async (page: number) => {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
  );

  const data = await resp.json();

  return setPokemon(data.results);
};

export const setPokemon = async (data: any) => {
  for (const url of data) {
    const resp = await fetch(url.url);

    const data: Pokemon = await resp.json();

    pokemons = [...pokemons, data];
  }

  return printPokemon(pokemons);
};
