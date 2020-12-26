import './Pokemons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react'
import Pokemons from './Pokemons';
import { Container, Button } from 'react-bootstrap';
import { getAllPokemons, getPokemonsData } from '../../services/Services';


function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [currUrl, setCurrUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=30');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let response = await getAllPokemons(currUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            let pokemonsData = await getPokemonsData(response.results);
            setPokemons(pokemonsData);
            setLoading(false);
        }
        fetchData();
    }, [currUrl]);

    function nextPage() {
        setCurrUrl(nextUrl);
    };

    function prevPage() {
        setCurrUrl(prevUrl);
    }


    return (
        <Container >
            {loading ? <h4 style={{ margin: 'auto' }}> Loading Pokemons...</h4> :
                <div style={{ justifyContent: 'center' }}>
                    <Pokemons key={pokemons.name} pokemons={pokemons} />
                    <Button disabled={!prevUrl} className='btnStyle' onClick={prevPage}>Previous</Button>
                    <Button disabled={!nextUrl} className='btnStyle' onClick={nextPage}>Next</Button>
                </div>
            }
        </Container>)
};

export default PokemonList;