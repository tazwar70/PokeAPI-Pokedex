const pokedex = document.getElementById('pokedex');

var firstPokemon = 1;
var lastPokemon = 151;



const fetchPokemon = () => {
    const promises = [];
    for (let i = firstPokemon; i <= lastPokemon; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <h2 class="card-title">#${pokeman.id}</h2>
            <h1 class="pokemon-name">${pokeman.name}</h1>
            <img class="card-image" src="${pokeman.image}"/>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

function kantoDex(){
    firstPokemon = 1;
    lastPokemon = 151;
    fetchPokemon();
};
function jhotoDex(){
    firstPokemon = 152;
    lastPokemon = 251;
    fetchPokemon();
};
function hoennDex(){
    firstPokemon = 252;
    lastPokemon = 386;
    fetchPokemon();
};
function sinnohDex(){
    firstPokemon = 387;
    lastPokemon = 493;
    fetchPokemon();
};
function unovaDex(){
    firstPokemon = 494;
    lastPokemon = 649;
    fetchPokemon();
};
function kalosDex(){
    firstPokemon = 650;
    lastPokemon = 721;
    fetchPokemon();
};
function alolaDex(){
    firstPokemon = 722;
    lastPokemon = 809;
    fetchPokemon();
};