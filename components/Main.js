import { MainAside } from "./Main-aside.js";
import { MainSection } from "./Main-section.js";

export function Main(){
     const $main = document.createElement("section");
     
     $main.classList.add("main-article");
     
     $main.appendChild(MainSection());
     // $main.appendChild(MainAside());

     return $main;
}