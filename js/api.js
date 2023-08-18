export async function getPokemons(uri){

    try {

        const res = await fetch(uri),
          pokemons = await res.json();

          return pokemons;
        
    } catch (error) {

        console.log(error);
        
    }
    
}