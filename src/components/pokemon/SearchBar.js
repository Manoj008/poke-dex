import { AppBar, InputBase, IconButton, MenuItem, Toolbar, Typography, TextField, Avatar } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Shop } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom'
import { getAllPokemons, getPokemonsData } from '../../services/Services';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    customizeToolbar: {
        maxHeight: 1,
        backgroundColor: '#222'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'flex',
        position: 'relative',
        marginLeft: '1rem',
        color: '#A0822E',
        cursor: 'pointer',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '2.0rem',
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.10),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.20),
        },
        position: 'absolute',
        marginRight: 0,
        right: '1rem',
        height: 40,
        width: '40%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '30%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        color: '#BBB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#BBB',
    },
    resize: {
        height: 9,
        color: '#DDD',
        borderColor: '#BBB'

    },
    searchInput: {
        color: '#ddd',

        padding: theme.spacing(0, 1, 1, 0),
        // vertical padding + font size from searchIcon
        marginLeft: `calc(1em + ${theme.spacing(4)}px)`,
        marginRight: `calc(1em + ${theme.spacing(3)}px)`,
        transition: theme.transitions.create('width'),
        width: '80%',
        fontSize: 10,
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            '&:focus': {
                width: '80%',
            },
        },
        [theme.breakpoints.up('md')]: {
            width: '90%',
            '&:focus': {
                width: '90%',
            },
        },
    },
}));

function SearchBar({ pokemons, setPokemons, keyword, setKeyword, pokemonsArray, setPokemonsArray, loadMore, setLoadMore }) {
    var history = useHistory();



    const onPokemonSearch = async value => {
        if (value.length > 1) {
            let arr = pokemonsArray;
            let newArr = arr.filter(poke =>
                (poke.name.includes(value))
            );

            setPokemons(newArr);
            setLoadMore(false);
        }
        else if (value.length > 0 && value.length < 2) {
            let arr = pokemonsArray.slice(0, 200);
            let newArr = arr.filter(poke =>
                (poke.name.includes(value))
            );
            setLoadMore(false);
            setPokemons(newArr);
        }
        else {
            setLoadMore(true);
            await setPokemons(pokemonsArray.slice(0, 50));
        }
    }

    const onTextChangeHandler = (e) => {
        const value = e.target.value;
        setKeyword(value);
        onPokemonSearch(value);
    };

    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            history.push('/pokemon/' + e.target.value.toLowerCase());
            e.target.value = ''
        }

    }

    const onlogoClickHandler = () => {
        setKeyword('');
        history.push('/');
    }

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.customizeToolbar}>
                    <div className={classes.title} onClick={onlogoClickHandler}>
                        <Avatar src={process.env.PUBLIC_URL + '/pokeball.png'} className={classes.small} />
                        <Typography variant="h5" noWrap >
                            Pokedex
                        </Typography>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <TextField onChange={onTextChangeHandler}
                            onKeyDownCapture={onKeyDownHandler}
                            className={classes.searchInput}
                            InputProps={{
                                classes: {
                                    input: classes.resize
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#BBB',
                                    borderBottomColor: '#BBB'
                                }
                            }}
                            label="Pokemon"
                            variant="filled"
                            value={keyword}
                            size='small'
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SearchBar;