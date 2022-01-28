export function PokeCard(el){
     const $card = document.createElement("a");
     $card.classList.add("poke-card");
     $card.setAttribute("href", "#")
     let pokeType = el.types;
     let typeArray = [];
     pokeType.forEach(el => {
          typeArray.push(el.type.name);
     });
     
     $card.dataset.id= el.id;
     
     $card.innerHTML = `     
          <img src=${el.sprites.front_default} alt=${el.name}>
          <figcaption class='poke-card-info'>
          <h2>${el.name}</h2>
          <p>Type: ${typeArray.join(", ")}</p>
          <p>Height: ${el.height}</p>
          <p>Weight: ${el.weight}</p>
          </figcaption>
     `;

     //modelo a para maquetación
     // console.log(el); 

     return $card;
}