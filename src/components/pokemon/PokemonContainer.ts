import { getPokemon } from "./GetPokemon";
import Loader from "../Loader";

const container = document.querySelector(".loader");

const getData = async (): Promise<void> => {
  try {
    Loader(true, container);
    await getPokemon(200);
  } catch (error) {
    console.log(error);
  } finally {
    Loader(false, container);
  }
};

getData();
