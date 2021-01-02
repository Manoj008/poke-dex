import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import './Pokemons.css';
import { getPokemon, getSpecies, getEvolution, getEvolutionChain } from "../../services/Services";
import Evolve from './Evolve';
import Ability from './Ability';
import Type from './Type';
import Stat from './Stat';
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import PokemonCard from "./PokemonCard";


function PokemonDetails(props) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [species, setSpecies] = useState([]);
    const [evolution, setEvolution] = useState([]);
    const [pokeDetails, setPokeDetails] = useState('');
    const [failed, setFailed] = useState(false);
    const [prevBtn, setPrevBtn] = useState(false);

    var history = useHistory();
    const path = "https://pokeapi.co/api/v2" + props.location.pathname;
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            let pokemonData = await getPokemon(path);

            if (pokemonData === 404) {
                setFailed(true);
            } else {
                setFailed(false);
                setPokemon(pokemonData);
                if (pokemonData.id < 2) {
                    setPrevBtn(false);
                }
                else {
                    setPrevBtn(true);
                }
                let spec = await getSpecies(pokemonData.species.url);
                setSpecies(spec);

                spec.flavor_text_entries.map((fl, index) => {
                    if (fl.language.name === 'en') {
                        setPokeDetails(fl.flavor_text);
                    }
                })
                let evolve = await getEvolution(spec.evolution_chain.url);
                let chain = [];
                let evoData = evolve.chain;
                var i = 0;
                do {

                    let numberOfEvolutions = evoData['evolves_to'].length;

                    var s = evoData.species.url.split('/');
                    var k = s[s.length - 2];
                    chain.push({
                        "id": k,
                        "species_name": evoData.species.name,
                        "sprite": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${k}.png`
                    });

                    if (numberOfEvolutions > 1) {
                        var innerChain = [];
                        for (let i = 0; i < numberOfEvolutions; i++) {
                            var s = evoData.evolves_to[i].species.url.split('/');
                            var k = s[s.length - 2];
                            innerChain.push({
                                "id": k,
                                "species_name": evoData.evolves_to[i].species.name,
                                "sprite": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${k}.png`
                            });
                        }
                        chain = chain.concat([innerChain]);
                        evoData = evoData['evolves_to'][0]['evolves_to'][0];
                    }
                    else {
                        evoData = evoData['evolves_to'][0];
                    }

                } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
                if (!Array.isArray(chain[chain.length - 1])) {
                    console.log('inside last form')
                    let sp = await getSpecies('https://pokeapi.co/api/v2/pokemon-species/' + chain[chain.length - 1].id);

                    var megaEvo = [];
                    sp.varieties.forEach((s, i) => {
                        console.log('inside loop');
                        if (!s.is_default && s.pokemon.name.includes('mega')) {
                            var b = s.pokemon.url.split('/');
                            var k = b[b.length - 2];
                            console.log('inside iff' + s.pokemon.url);
                            megaEvo.push({
                                "id": k,
                                "species_name": s.pokemon.name,
                                "sprite": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${k}.png`
                            });
                        }

                    });
                    if (megaEvo.length > 0) {
                        chain = chain.concat([megaEvo]);
                    }
                } else {
                    console.log('inside last form')
                    let sp = await getSpecies('https://pokeapi.co/api/v2/pokemon-species/' + chain[chain.length - 1][0].id);

                    var megaEvo = [];
                    sp.varieties.forEach((s, i) => {
                        console.log('inside loop');
                        if (!s.is_default && s.pokemon.name.includes('mega')) {
                            var b = s.pokemon.url.split('/');
                            var k = b[b.length - 2];
                            console.log('inside iff' + s.pokemon.url);
                            megaEvo.push({
                                "id": k,
                                "species_name": s.pokemon.name,
                                "sprite": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${k}.png`
                            });
                        }

                    });
                    if (megaEvo.length > 0) {
                        chain = chain.concat([megaEvo]);
                    }
                }

                setEvolution(chain);
            }
            setLoading(false);
        }
        fetchData();
    }, [path]);



    return (
        (loading ?
            <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress />
            </div> :
            failed ?
                <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h4 style={{ color: '#ddd' }}> No Pokemon Found For this Search</h4 >
                </div> :

                < PokemonCard pokemon={pokemon} evolution={evolution} pokeDetails={pokeDetails} prevBtn={prevBtn} />


        )
    );
};

export default PokemonDetails;