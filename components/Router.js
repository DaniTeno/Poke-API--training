import { Ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js"
import { PokeCard } from "./Poke-Card.js";
import { RandomPage } from "./Random-Page.js";
import { RegionCard } from "./Region-Card.js";
import { Search } from "./Search-F.js";


export async function Router(){
     const d = document,
          $main = d.querySelector(".main-section");
     
     $main.innerHTML= "";

     let hash = location.hash;
     
     // console.log(hash);

     if(!hash || hash === "#/"){
          await Ajax({
               url: api.POKEMONS,
               cbSuccess: (res)=>{
                    let pokemons = res.results;
                    // Doble petición ajax porque la primera iteración solo da el nombre y la url donde está el json con la info
                    pokemons.forEach(el => {
                         Ajax({
                              url: el.url,
                              cbSuccess: (pokemon) => {
                                   $main.insertAdjacentElement("beforeend", PokeCard(pokemon));
                              }
                         });
                    });
               }
          })
     } else if (hash == "#/regions" ){
          $main.classList.add("regions");
          await Ajax({
               url: api.REGIONS,
               cbSuccess: (res) =>{
                    let regions = res.results;
                    regions.forEach(el => {
                         Ajax({
                              url: el.url,
                              cbSuccess: (res) => {
                                   $main.insertAdjacentElement("beforeend", RegionCard(res));
                                   // TODAVIA FALTA AGREGAR LA FUNCION DE CADA LOCALIZACION
                              }
                         });
                    });
               }
          })
     } else if (hash == "#/random" ){
          RandomPage();
     } else if(hash =='#/search'){
          $main.innerHTML = "";
          Search();
     }



}