import { SearchPage } from "./Search-Page.js";

export function Menu(){
     const $menu = document.createElement("nav");
     $menu.classList.add("menu");
     
     $menu.innerHTML= `
          <a href='#/regions'>Regions</a>
          <a href='#/random' id="randomize">Poke-random</a>
     `;
     
     $menu.appendChild(SearchPage())

     return $menu;
}