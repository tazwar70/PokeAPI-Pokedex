const pokedex = document.getElementById("pokedex");

var firstPokemon = 1;
var lastPokemon = 151;

const fetchPokemon = () => {
    const promises = [];
    for (let i = firstPokemon; i <= lastPokemon; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
    }
    Promise.all(promises).then(results => {
        const pokemon = results.map(result => ({
            name: result.name,
            image: result.sprites["front_default"],
            type: result.types.map(type => type.type.name).join(", "),
            id: result.id
        }));
        //console.log(results);
        displayPokemon(pokemon);
        console.log(pokemon);
    });
};

const displayPokemon = pokemon => {
    //    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            pokeman => `
        <li class="pkmn-card" onclick="showPKMNData('${pokeman.name}')">
            <h2 class="pkmn-card-title">#${pokeman.id}</h2>
            <h1 class="pokemon-name">${pokeman.name}</h1>
            <img class="pkmn-card-image" src="${pokeman.image}"/>
            <p class="pkmn-card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join("");
    pokedex.innerHTML = pokemonHTMLString;
    return pokemon.name;
};

fetchPokemon();

function kantoDex() {
    firstPokemon = 1;
    lastPokemon = 151;
    fetchPokemon();
}

function jhotoDex() {
    firstPokemon = 152;
    lastPokemon = 251;
    fetchPokemon();
}

function hoennDex() {
    firstPokemon = 252;
    lastPokemon = 386;
    fetchPokemon();
}

function sinnohDex() {
    firstPokemon = 387;
    lastPokemon = 493;
    fetchPokemon();
}

function unovaDex() {
    firstPokemon = 494;
    lastPokemon = 649;
    fetchPokemon();
}

function kalosDex() {
    firstPokemon = 650;
    lastPokemon = 721;
    fetchPokemon();
}

function alolaDex() {
    firstPokemon = 722;
    lastPokemon = 807;
    fetchPokemon();
}

function getSpecificPokemonData(poke_name){
    var poke_info_url = `https://pokeapi.co/api/v2/pokemon/${poke_name}`;
    const poke_info = [];
    poke_info.push(fetch(poke_info_url).then(res => res.json()));
    
    Promise.all(poke_info).then(results => {
        const pokemon = results.map(result => ({
            name: result.name,
            image: result.sprites["front_default"],
            type: result.types.map(type => type.type.name).join(", "),
            id: result.id
        }));
        console.log(pokemon);
        
        var pokemon_info_view = pokemon.map(
            pokemo_info => `
        
            <h2 class="pkmn-card-title">#${pokemo_info.id}</h2>
            <h1 class="pokemon-name">${pokemo_info.name}</h1>
            <img class="pkmn-card-image" src="${pokemo_info.image}"/>
            <p class="pkmn-card-subtitle">Type: ${pokemo_info.type}</p>
            ` )
            document.getElementById('modal_pokemon_info').innerHTML = pokemon_info_view;
    });
}

function showPKMNData(poke_name) {
    // alert(poke_name);
    $('#exampleModal').modal('show');

    document.getElementById('exampleModalLabel').innerHTML = poke_name;
    
    getSpecificPokemonData(poke_name);
}