import { data } from "../data/navbar";

const app = document.getElementById("app");
const navContainer = document.getElementById("nav");

const nav: HTMLElement = document.createElement("nav");
const header: HTMLElement = document.createElement("header");

let menu: string = "";

data.forEach((el) => {
  menu += `<a href="">${el[0]}</a>`;
});

nav.innerHTML = menu;
nav.classList.add("menu", "container");
header.appendChild(nav);
navContainer?.appendChild(header);
