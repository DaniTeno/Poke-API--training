export function RegionCard(el){
     const $cardRegion = document.createElement("div");
          $cardRegion.classList.add("region-card");
          $cardRegion.setAttribute("href", "#");

     $cardRegion.dataset.id= el.id;

     let regionLocations = [];
     el.locations.forEach(loc => {
          regionLocations.push(`<a href="${loc.url}" class="a-region">${loc.name}</a>`);
     });

     let regionVersions = [];
     el.version_groups.forEach(loc => {
          regionVersions.push(`<a>${loc.name}</a>`);
     });
     
     $cardRegion.innerHTML = `     
          <div class="region-span">
               <h2>${el.name}</h2>
               <h3>🔽 locations</h3>
          </div>
          <div id="region-versions">
               <b>versions:</b> ${regionVersions.join(" | ")}
          </div>
          <figcaption class='region-card-info hidden'>
               <div id="region-locations">
                    ${regionLocations.join("")}
               </div>
          </figcaption>
     `;

     $cardRegion.addEventListener("click", e =>{
          if(e.target.matches("h2")||e.target.matches("h3")){
               document.querySelector(`[data-id="${$cardRegion.dataset.id}"] .region-card-info`).classList.toggle("hidden");
               $cardRegion.classList.toggle("active");
          }
     });


     return $cardRegion;
}