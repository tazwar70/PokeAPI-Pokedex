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
        //console.log(results);
        displayPokemon(pokemon);
        console.log(pokemon);
    });
};

const displayPokemon = (pokemon) => {
//    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="pkmn-card" onclick="fetchPKMNData()">
            <h2 class="pkmn-card-title">#${pokeman.id}</h2>
            <h1 class="pokemon-name">${pokeman.name}</h1>
            <img class="pkmn-card-image" src="${pokeman.image}"/>
            <p class="pkmn-card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
    return(pokemon.name);
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
    lastPokemon = 807;
    fetchPokemon();
};

window.onscroll = function() {myFunction()};

var header = document.getElementById("myButtons");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function fetchPKMNData(poke_name){
    alert(poke_name);
    consoles.log(poke_name);
}