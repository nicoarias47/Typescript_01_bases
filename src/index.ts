console.log("Hola mundo");

const app = document.getElementById("app");

const hello = document.createElement("h1");

hello.textContent = "Hola mundo";

app?.appendChild(hello);
