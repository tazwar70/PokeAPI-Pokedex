const pokedex = document.getElementById("pokedex");

var firstPokemon = 1;
var lastPokemon = 151;

const fetchPokemon = () => {
    const promises = [];
    let loader = `<div id="boxLoading"><i class="fad fa-hurricane fa-spin"></i></div>`;
    document.getElementById('pokedex').innerHTML = loader;
    for (let i = firstPokemon; i <= lastPokemon; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()));
    }
    Promise.all(promises).then(results => {
        const pokemon = results.map(result => ({
            name: result.name,
            image: result.sprites["front_default"],
            type: result.types.reverse().map(type => type.type.name).join(", "),
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
            <p class="pkmn-card-subtitle">Type: <span style="border-radius:7px; padding:5px; background: var(--${pokeman.type}); color:var(--font_${pokeman.type});">${pokeman.type}</span></p>
        </li>
    `
        )
        .join("");
    pokedex.innerHTML = pokemonHTMLString;
    return pokemon.name;
};

fetchPokemon();

function completeDex() {
    firstPokemon = 1;
    lastPokemon = 807;
    fetchPokemon();
}


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

function getSpecificPokemonData(poke_name) {
    var poke_info_url = `https://pokeapi.co/api/v2/pokemon/${poke_name}`;
    const poke_info = [];
    poke_info.push(fetch(poke_info_url).then(res => res.json()));

    Promise.all(poke_info).then(results => {
        const pokemon = results.map(result => ({
            stats: result.stats.map(stat => stat.base_stat),
            name: result.name,
            image: result.sprites["front_default"],
            type: result.types.reverse().map(type => type.type.name).join(", "),
            id: result.id
        }));
        console.log(pokemon);

        var pokemon_info_view = pokemon.map(
            pokemo_info => `
            <div class="container" style="text-align: center;align-items: center;margin:0;padding:0; height:100%; width: 100%;">
                <div id="modal-pokemon-name-id-container">
                    <h2 class="modal-pkmn-card-title">#${pokemo_info.id}</h2>
                    <h1 class="modal-pokemon-name">${pokemo_info.name}</h1>
                </div>
                <p class="modal-pkmn-card-subtitle">Type: <span style="border-radius:7px; padding:5px; background: var(--${pokemo_info.type}); color:var(--font_${pokemo_info.type});">${pokemo_info.type}</span></p>
                <img class="modal-pkmn-card-image" src="${pokemo_info.image}"/>
                <div class="col">
                    <div class="progress" style="background:var(--background);">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${pokemo_info.stats[0]}%" aria-valuenow="${pokemo_info.stats[0]}" aria-valuemin="0" aria-valuemax="255">Spd ${pokemo_info.stats[0]}</div>
                    </div>
                    <div class="progress" style="background:var(--background);">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: ${pokemo_info.stats[1]}%" aria-valuenow="${pokemo_info.stats[1]}" aria-valuemin="0" aria-valuemax="255">Sp. Def ${pokemo_info.stats[1]}</div>
                    </div>
                    <div class="progress" style="background:var(--background);">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style="width: ${pokemo_info.stats[2]}%" aria-valuenow="${pokemo_info.stats[2]}" aria-valuemin="0" aria-valuemax="255">Sp. Atk. ${pokemo_info.stats[2]}</div>
                    </div>
                    <div class="progress" style="background:var(--background);">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: ${pokemo_info.stats[3]}%" aria-valuenow="${pokemo_info.stats[3]}" aria-valuemin="0" aria-valuemax="255">Def. ${pokemo_info.stats[3]}</div>
                    </div>
                    <div class="progress" style="background:var(--background);">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${pokemo_info.stats[4]}%" aria-valuenow="${pokemo_info.stats[4]}" aria-valuemin="0" aria-valuemax="255">Atk. ${pokemo_info.stats[4]}</div>
                    </div>
                    <div class="progress" style="background:var(--background);">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: ${pokemo_info.stats[5]}%" aria-valuenow="${pokemo_info.stats[5]}" aria-valuemin="0" aria-valuemax="255">HP ${pokemo_info.stats[5]}</div>
                    </div>
                </div>
                <button id="close_dex_entry" onclick="close_dex_entry()">Close</button>
            </div>
    

            `)




        document.getElementById('pokemon-entry').innerHTML = pokemon_info_view;
        document.getElementById('pokemon-entry').style.display = 'initial';
        // document.getElementById('exampleModalLabel').innerHTML = poke_name;

    });
}

function showPKMNData(poke_name) {
    // alert(poke_name);
    // $('#exampleModal').modal('show');
    document.getElementById('pokedex').style.display = 'none';
    getSpecificPokemonData(poke_name);
}

function close_dex_entry() {
    document.getElementById('pokemon-entry').style.display = 'none';
    document.getElementById('pokedex').style.display = 'grid';
    fetchPokemon();
}