import './Pokemons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react'
import Pokemons from './Pokemons';
import { Container, Button } from 'react-bootstrap';
import { getAllPokemons, getPokemonsData } from '../../services/Services';
import { CircularProgress, Grid, IconButton, makeStyles } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    customHoverFocus: {
        "&:hover, &.Mui-focusVisible": { backgroundColor: "white" },
        backgroundColor: '#888',
        marginBottom: '1rem',
    },
    loading: {
        color: '#EEE',
        alignSelf: 'center'
    }
}));


function PokemonList({ pokemons, setPokemons, setKeyword, pokemonsArray, setPokemonsArray, loadMore, setLoadMore }) {
    const [currUrl, setCurrUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=50');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);
    const classes = useStyles();


    useEffect(async () => {
        async function fetchData() {
            let response = await getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=1200');
            var pokeArray = response.results.map((poke) => {
                var s = poke.url.split('/');
                var k = s[s.length - 2];
                return (
                    {
                        key: k,
                        id: k,
                        name: poke.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${k}.png`

                    });
            })
            setPokemonsArray(pokeArray);
            setPokemons(pokeArray.slice(0, 50));
            setOffset(50);
            setPage(1);

            setLoading(false);
            setLoadMore(false);
        }

        fetchData();

    }, []);


    function nextPage() {
        if (!loadMore) {
            setPokemons([...pokemons, ...pokemonsArray.slice(offset, offset + 50)]);
            setOffset(offset + 50);
            setPage(page + 1);
        }
    };

    return (
        loading ?
            <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center'
            }}>
                <CircularProgress className={classes.loading} />
            </div> :
            (<div style={{ backgroundColor: '#333333' }}>
                <Pokemons pokemons={pokemons} setKeyword={setKeyword} />
                <hr style={{ paddingBottom: '0rem' }} />
                <Grid container spacing='center' justify='center'>
                    <IconButton className={classes.customHoverFocus} aria-label="Load More">
                        <ExpandMoreOutlined
                            color='error'
                            onClick={nextPage} />
                    </IconButton>
                </Grid>
            </div >)

    )
};

export default PokemonList;