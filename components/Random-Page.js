import { Ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
import { ItemCard } from "./Item-Card.js";
import { PokeCard } from "./Poke-Card.js";

export function RandomPage(){
     const urlArr = [api.POKEMON, api.ITEMS],
          $main = document.querySelector(".main-section");

     let randomUrl = urlArr[Math.floor(Math.random()*urlArr.length)];

     Ajax({
          url: randomUrl,
          cbSuccess: (req) => {
               console.log(req)
               Ajax({
                    url: `${randomUrl}${Math.floor(Math.random()*req.count)}`,
                    cbSuccess: (randomResult) => {
                         if(randomResult.abilities){
                              $main.insertAdjacentElement("beforeend", PokeCard(randomResult));                                                           
                         }else{
                              $main.insertAdjacentElement("beforeend", ItemCard(randomResult));                                                           
                         }                        
                    }
               })
          }
     })
     
     document.addEventListener("click", e=>{
          if(e.target.matches("#randomize")){
               window.location.reload();
          }
     })
}