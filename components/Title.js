export function Title(){
     const $title = document.createElement("div");
     $title.classList.add("title");
     
     $title.innerHTML = `
          <a href='#/'><img src='../assets/pokeapi_256.3fa72200.png' alt='poke-api' id='poke-title'></a>
     `;

     return $title;
}