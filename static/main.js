const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Obtener los primeros 151 Pokémon
for (let i = 1; i <= 1025; i++) {
    fetch(URL + i)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error al obtener el Pokémon con ID ${i}`);
            }
            return response.json();
        })
        .then(data => mostrarPokemon(data))
        .catch(error => console.error("Error al obtener el Pokémon:", error));
}

function mostrarPokemon(poke) {
    let tipos = poke.types.map(type => 
        `<p class="${type.type.name} tipo">${type.type.name.toUpperCase()}</p>`
    ).join('');

    let pokeId = poke.id.toString().padStart(3, "0");

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height / 10}m</p>
                <p class="stat">${poke.weight / 10}kg</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}


botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error al obtener el Pokémon con ID ${i}`);
                }
                return response.json();
            })
            .then(data => {
                if (botonId === "ver-todos") {
                    mostrarPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarPokemon(data);
                    }
                }
            })
            .catch(error => console.error("Error al filtrar Pokémon:", error));
    }
}));

// Funcionalidad de búsqueda
document.getElementById('buscar-btn').addEventListener('click', async function() {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Pokémon no encontrado');
        }
        const pokemon = await response.json();

        // Limpiar la lista antes de mostrar el Pokémon buscado
        listaPokemon.innerHTML = '';
        mostrarPokemon(pokemon);
    } catch (error) {
        alert(error.message);
    }
});
