import { Router } from "./Router.js";

export function SearchPage(){
     const $searchDiv = document.createElement("div");

     $searchDiv.classList.add("search-div");
     
     $searchDiv.innerHTML = `
          <form class="search-form">
               <select name="option">
                    <option>Pokemon</option>
                    <option>Item</option>
               </select>
               <input type="text" placeholder="type here..." name="keyword" required>
               <input type="submit" value="Search" id="submit-btn" class="menu-btn">
          </form>
     `;

     $searchDiv.addEventListener("click", e =>{
          e.preventDefault();
          const $searchForm = document.querySelector(".search-form");
          let $keyword = $searchForm.keyword.value.toLowerCase(),
               $option = $searchForm.option.value.toLowerCase();

          if(e.target.matches("#submit-btn")){
               localStorage.setItem("keyword", $keyword);
               localStorage.setItem("option", $option);
               location.hash = "#/search";
               Router();
          }
     });
     
     return $searchDiv;
}