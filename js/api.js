export async function getPokemons(uri){
    const d= document;
    const $container= d.querySelector(".container-pokemons");

    try {

        const res = await fetch(uri),
          pokemons = await res.json();

          return pokemons;
        
    } catch (error) {

        console.log(error);

       const er =  d.createElement("p");

       er.textContent= "A ocurrido un error, intente más tarde por favor";



        $container.replaceChildren(er);
        
    }
    
}