import { getPokemons } from "./api.js";

const d = document,
    uri= `https://pokeapi.co/api/v2/pokemon/`;

d.addEventListener("DOMContentLoaded", e =>{

    showPokemons(uri);

})

const showPokemons = async (uri) => {
          
    
         const $container= d.querySelector(".container-pokemons");
         const fragment = d.createDocumentFragment();

         $container.innerHTML= 
         `<div class="loader">
          <img src="./assets/images/rings.svg" alt="Loading">
          </div>`

         
        
         //GET POKEMONS
         const pokemons = await getPokemons(uri);
         
          d.querySelector(".next").href= pokemons.next;
          d.querySelector(".prev").href= pokemons.previous;

   for(let i=0; i<pokemons.results.length; i++){
    
    
      const pokemon = await getPokemons(pokemons.results[i].url);
    
      let card= d.createElement("div");
      card.classList.add("card-content")

     

     card.innerHTML= 
      `<div class="poke-card ${pokemon.types[0].type.name}">
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="${pokemon.name}" class="poke-img">
         <p>#${pokemon.id}</p>
         <p class="poke-name">${pokemon.name}</p>
         
      </div>`

     fragment.appendChild(card);

    
}

$container.replaceChildren(fragment);

}


//Acciones para la paginacion

d.addEventListener("click", e => {
    
    e.preventDefault();

    if(e.target.matches(".next")){

        showPokemons(e.target.href);
    }

    if(e.target.matches(".prev")){

        showPokemons(e.target.href);
    }
})