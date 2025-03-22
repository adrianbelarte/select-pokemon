const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"


function obtenerPokemon(pokemonon){
    fetch(pokemonAPI+pokemonon)
    .then(response => {
        if(!response.ok){
            throw new Error("Error a obtener datos")
        }
        return response.json();
    })
    .then(data => {
        const nombre = data.name;
        const id = data.id;
        const tipos = data.types.map(type => type.type.name);  
        const habilidades = data.abilities.map(ability => ability.ability.name);
        const imagen = data.sprites.front_default;  
        mostrarPokemon(nombre, id, tipos, habilidades, imagen);
        
    })
    .catch(error => {
        console.error("error petición",  error)
    })
}



document.getElementById("get-pokemon").addEventListener("click", function(){
    let selectedPokemon = document.getElementById("pokemon-select").value;
    obtenerPokemon(selectedPokemon);
})

function mostrarPokemon(nombre, id, tipos, habilidades, imagen) {
    const pokemonInfo = document.getElementById("pokemon-info");

    pokemonInfo.innerHTML = `
        <div class="pokemon-card">
            <img src="${imagen}" alt="${nombre}">
            <h2>${nombre} (#${id})</h2>
            <p><strong>Tipo:</strong> ${tipos}</p>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
        </div>
    `;
}
