export async function getAllPokemons(url) {
    return new Promise((resolve, reject) => {
        let isActive = true;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            }).catch((message) => {
                console.log(message);
            });

        return () => { isActive = false; };
    });
};

export async function getPokemonsData(pokemons) {
    let _PokemonsData = await Promise.all(
        pokemons.map(
            async pokemon => {
                return getPokemon(pokemon.url)
            }
        )
    );

    return _PokemonsData;

};

export async function getPokemon(pokemon) {
    return new Promise((resolve, reject) =>
        fetch(pokemon)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            }).catch((e) => {
                resolve(404);
            })
    );
};

export async function getSpecies(specie) {
    return new Promise((resolve, reject) => {
        fetch(specie)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            }).catch((message) => {
                console.log(message);
            });
    });
};

export async function getEvolution(path) {
    return new Promise((resolve, reject) => {
        fetch(path)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            }).catch((message) => {
                console.log(message);
            });
    });
};

export async function getEvolutionChain(chain) {
    let _evoData = await Promise.all(
        chain.map(
            async c => {
                return getPokemon('https://pokeapi.co/api/v2/pokemon/' + c.species_name)
            }
        )
    );
    return _evoData;

};

export async function getAllAbilities(abilities) {
    let _allAbilities = await Promise.all(
        abilities.map(
            async a => {
                return getOneAbility(a.ability.url);
            }
        )
    )
    return _allAbilities;

};

async function getOneAbility(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            }).catch((message) => {
                console.log(message);
            });

    });
};