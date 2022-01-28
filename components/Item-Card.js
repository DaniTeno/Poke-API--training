export function ItemCard(el){
     const $card = document.createElement("a");

     let itemAttributes = el.attributes,
          attributesArray = [],
          imgSrc = el.sprites.default;

     $card.classList.add("poke-card");
     $card.setAttribute("href", "#");
     itemAttributes.forEach(atribute => {
          attributesArray.push(atribute.name);
     });
     
     $card.dataset.id= el.id;

     if(!imgSrc) imgSrc = "https://cdn-icons.flaticon.com/png/512/4502/premium/4502682.png?token=exp=1643230803~hmac=89b9dcad1eab2c795fd0c6c223296d8d";
     if(!attributesArray.length) attributesArray.push("None");
     $card.innerHTML = `     
          <img src=${imgSrc} alt=${el.name}>
          <figcaption class='poke-card-info'>
          <h2>${el.name}</h2>
          <p><b>Attributes:</b> ${attributesArray.join(", ")}</p>
          </figcaption>
     `;

     //modelo a para maquetación
     // console.log(el); 

     return $card;
}