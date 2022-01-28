import { Header } from "./components/header.js";
import { Main } from "./components/main.js";
import { Router } from "./components/Router.js";

export function App() {
     const d = document,
          $main = d.getElementById("root");

     $main.innerHTML= null;

     $main.insertAdjacentElement("afterbegin",Header());
     $main.appendChild(Main());

     Router();
}