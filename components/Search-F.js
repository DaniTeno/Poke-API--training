import { Ajax } from "../helpers/ajax.js";
import api from "../helpers/api.js";
import { ItemCard } from "./Item-Card.js";
import { PokeCard } from "./Poke-Card.js";
import { Router } from "./Router.js";


export function Search() {          
     const $main = document.querySelector(".main-section");
     let keyword = localStorage.getItem("keyword"),
          option = localStorage.getItem("option");
     
     if(keyword == ""){
          console.log("stopped");
          location.hash= "#/";
          return Router();
     } 
     
     Ajax({
          url: `${api.SITE}${option}/`,
          cbSuccess: (req) => {
               Ajax({
                    url: `${api.SITE}${option}/?limit=${req.count}`,
                    cbSuccess: (all) => {
                         let allRequests = all.results;
                         let elements = [];               
                         
                         allRequests.forEach(el => {if(el.name.includes(keyword)) elements.push(el)});
                         console.log(elements);

                         if (elements.length == 0) return $main.innerHTML = `No ${option} results for: ${keyword}`;       
                         
                         elements.forEach(el => {
                              Ajax({
                                   url: el.url,
                                   cbSuccess: (element) => {                                                                                                    
                                        switch (option) {
                                             case "pokemon":
                                                  $main.insertAdjacentElement("beforeend", PokeCard(element));                                                           
                                                  break;
                                             case "item":
                                                  $main.insertAdjacentElement("beforeend", ItemCard(element));                                                           
                                                  break;                                                           
                                        }
                                   }
                              });
                         })                           
                    }
               })                            
          }                    
     });
}