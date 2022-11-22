import { Pokemon } from "../../interfaces/pokemons";

const template: HTMLElement | any = document.querySelector("#pokemon-template");
const container = document.querySelector("#pokemon-container");
const fragment = document.createDocumentFragment();

export const printPokemon = async (data: Pokemon[]) => {
  data.forEach((el) => {
    const clone: HTMLElement = template.content.cloneNode(true);
    clone.querySelector("img")!.setAttribute("src", el.sprites.front_default);
    clone.querySelector(".card-title")!.textContent = el.name;

    const types: string[] = [];

    el.types.forEach((el) => {
      types.push(el.type.name);
    });

    clone.querySelector(".subtitle")!.textContent = types.join(" | ");
    fragment.appendChild(clone);
  });

  container?.appendChild(fragment);
};
