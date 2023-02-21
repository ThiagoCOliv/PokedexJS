const pokemonList = document.getElementById('pokemonList');
const btnSeeMore = document.getElementById('verMais');

let offset = 0;
let limit = 8;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <div class="nomeNumero">
                <span class="nome">${pokemon.name}</span>
                <span class="numero">#${pokemon.number}</span>
            </div>
            <div class="detalhes">
                <ol class="tipos">
                    ${pokemon.types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemons(offset, limit){
    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    })
}

loadPokemons(offset, limit);

btnSeeMore.addEventListener('click', () => {
    offset += limit;
    loadPokemons(offset, limit);
})