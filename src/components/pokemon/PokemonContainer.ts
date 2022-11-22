import { getPokemon } from "./GetPokemon";

let loading: boolean = false;

const getData = () => {
  try {
    loading = true;

    getPokemon(0);
  } catch (error) {
    console.log(error);
  } finally {
    loading = false;
  }
};

const app = document.getElementById("app");

getData();
