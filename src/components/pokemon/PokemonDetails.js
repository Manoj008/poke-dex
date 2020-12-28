import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import './Pokemons.css';
import { getPokemon, getSpecies, getEvolution, getEvolutionChain } from "../../services/Services";
import Evolve from './Evolve';
import Ability from './Ability';
import Type from './Type';
import Stat from './Stat';
import { useHistory } from "react-router-dom";


function PokemonDetails(props) {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [species, setSpecies] = useState([]);
    const [evolution, setEvolution] = useState([]);
    const [pokeDetails, setPokeDetails] = useState('');
    const [prevBtn, setPrevBtn] = useState(true);
    const [failed, setFailed] = useState(false);

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
                if (pokemonData.id === 1) {
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
                do {
                    let numberOfEvolutions = evoData['evolves_to'].length;

                    chain.push({
                        "species_name": evoData.species.name,
                        "min_level": !evoData ? 1 : evoData.min_level,
                    });

                    if (numberOfEvolutions > 1) {
                        for (let i = 1; i < numberOfEvolutions; i++) {
                            chain.push({
                                "species_name": evoData.evolves_to[i].species.name,
                                "min_level": !evoData.evolves_to[i] ? 1 : evoData.evolves_to[i].min_level,

                            });
                        }
                    }
                    evoData = evoData['evolves_to'][0];
                } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

                var e = [];
                const evoChain = await getEvolutionChain(chain);
                setEvolution(evoChain);
            }
            setLoading(false);
        }
        fetchData();
    }, [path]);

    const handlePrevSubmit = () => {
        history.push('/pokemon/' + (pokemon.id - 1));
    }

    const handleNextSubmit = () => {
        history.push('/pokemon/' + (pokemon.id + 1));
    }

    return (
        (loading ?
            <h3> Loading.. </h3> :
            failed ?
                <h4 className={{ margin: 'auto' }
                }> No Pokemon Found For this Search</h4 > : (

                    <Card style={{ backgroundColor: 'lightgray' }}>
                        <Row className='no-gutters' style={{ justifyContent: 'center' }}>
                            <Col>
                                <Button disabled={!prevBtn} className='btn-info btn-block' onClick={handlePrevSubmit}><i className='fa fa-arrow-left'></i>{'#' + (pokemon.id - 1)}</Button>
                            </Col>
                            <Col>
                                <h4 style={{ margin: '0.3rem 1rem 0rem', textAlign: 'center' }}> {pokemon.name.toUpperCase() + '  '}<span style={{ color: "grey" }}> {'#' + pokemon.id}</span> </h4>
                            </Col>
                            <Col>
                                <Button className='btn-info btn-block' onClick={handleNextSubmit}>{'#' + (pokemon.id + 1)}<i className='fa fa-arrow-right'></i></Button>
                            </Col>
                        </Row >
                        <Row>
                            <Col className='comp-data'>
                                <Card.Img className='full-image' src={pokemon.sprites.other["official-artwork"]["front_default"]} />
                                {/* <Card.Img xs='4' className='full-image' src={pokemon.sprites.other["dream_world"]["front_default"]} /> */}
                                <Stat stats={pokemon.stats} />
                            </Col >
                            <Col className='comp-data'>
                                <div style={{ justifyContent: 'center' }}>


                                    <h6 style={{ margin: '1rem 0.5rem' }} className='poke-details'>{pokeDetails}</h6>

                                    <Row style={{ justifyContent: 'center', margin: '0.5rem', backgroundColor: 'steelblue', color: 'white', borderRadius: '0.3rem' }}>
                                        <h5 style={{ margin: '0.5rem auto' }}>{'Height: ' + pokemon.height}</h5>
                                        <h5 style={{ margin: '0.5rem auto' }}>{'Weight: ' + pokemon.weight}</h5>
                                    </Row>
                                    <Ability abilities={pokemon.abilities} />
                                    <Type types={pokemon.types} />
                                </div>
                            </Col>
                        </Row >
                        <Evolve evolution={evolution} />
                    </Card >
                )
        )
    );
};

export default PokemonDetails;