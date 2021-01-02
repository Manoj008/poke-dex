import { useEffect, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import './Pokemons.css';
import { getPokemon, getSpecies, getEvolution, getEvolutionChain } from "../../services/Services";
import Evolve from './Evolve';
import Ability from './Ability';
import Type from './Type';
import Stat from './Stat';
import { useHistory } from "react-router-dom";
import { CircularProgress, Grid, Paper, Container, makeStyles, Divider } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    container: {
        backgroundColor: '#555',
        padding: '0rem 1rem',
        [theme.breakpoints.up('sm')]: {
            padding: '0rem 5rem'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0rem 2rem'
        },


    },
    cardLeft: {
        backgroundColor: '#333',
        padding: '0rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        [theme.breakpoints.up('md')]: {
            marginBottom: '0rem'
        },
        // [theme.breakpoints.up('md')]: {
        //     margin: '1rem 0.5rem 0rem 0rem',
        // }

    },
    cardRight: {
        backgroundColor: '#333',
        padding: '1rem',
        borderRadius: '0.5rem',

        // [theme.breakpoints.up('md')]: {
        //     margin: '1rem 0rem 0rem rem',
        // }

    },
    loading: {
        color: '#EEE',
        alignSelf: 'center'

    },
    paperBackground: {
        color: 'black',
        backgroundColor: '#555',
        boxShadow: 'none',
        margin: '0 2rem'
    },
    pokeImage: {
        maxWidth: '20rem',
        margin: '1.5rem auto',
        [theme.breakpoints.up('sm')]: {
            margin: '0rem auto',
            maxWidth: '25rem'
        },
        [theme.breakpoints.up('md')]: {
            margin: '0rem auto',
            maxWidth: '20rem'
        },

    }
}));

function PokemonCard({ pokemon, evolution, pokeDetails, prevBtn }) {

    const classes = useStyles();
    var history = useHistory();

    const handlePrevSubmit = () => {
        history.push('/pokemon/' + (pokemon.id - 1));
    }

    const handleNextSubmit = () => {
        history.push('/pokemon/' + (pokemon.id + 1));
    }

    const getPrevNextButtons = () => {
        return (
            <Paper className={classes.paperBackground}>
                <Grid container justify='space-between'>
                    <Grid item>
                        <Button disabled={!prevBtn} className='btn-dark' onClick={handlePrevSubmit}><i className='fa fa-arrow-left'></i></Button>
                    </Grid>
                    <Grid item>
                        <h4 style={{ margin: '0.3rem 1rem 0rem', textAlign: 'center', color: '#eee' }}><span style={{ color: "#BBB" }}> {'#' + pokemon.id + '   '}</span> {pokemon.name.toUpperCase()} </h4>
                    </Grid>
                    <Grid item>
                        <Button className='btn-dark' onClick={handleNextSubmit}><i className='fa fa-arrow-right'></i></Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    };

    const getDetailsCards = () => {
        return (
            <Paper className={classes.paperBackground}>
                <Grid container alignItems='spac' justify='space-between'>
                    <Grid xs={12} sm={12} md={6} item className={classes.cardLeft}>
                        <Grid container className={classes.card}>
                            <Image className={classes.pokeImage} src={pokemon.sprites.other["official-artwork"]["front_default"]} />
                        </Grid>
                        <Stat stats={pokemon.stats} />
                    </Grid  >
                    <Grid item xs={12} sm={12} md={6} className={classes.cardRight} >
                        <h5 style={{ margin: '1rem' }} className='poke-details'>{pokeDetails}</h5>

                        <Grid item container >
                            <Grid item xs={6}>
                                <h5 className='physic-details'>{'Height: ' + pokemon.height / 10 + ' m'}</h5>
                            </Grid>
                            <Grid item xs={6}>
                                <h5 className='physic-details'>{'Weight: ' + pokemon.weight / 10 + ' kg'}</h5>
                            </Grid>
                        </Grid>

                        <Ability abilities={pokemon.abilities} />
                        <Type types={pokemon.types} />
                    </Grid>
                </Grid>
            </Paper>
        )
    };

    const getEvolutionCards = () => {
        return (
            <Paper className={classes.paperBackground}>
                {(evolution != '404' && evolution.length > 1) && <Evolve evolution={evolution} />}
            </Paper>
        )
    };

    return (
        <Container className={classes.container}>
            <Grid container direction='column' spacing={2} justify='center' style={{ backgroundColor: '#555', paddingTop: '0.5rem' }}>
                <Grid item>
                    {getPrevNextButtons()}
                </Grid>
                <Grid item>
                    {getDetailsCards()}
                </Grid>
                <Grid item>
                    {getEvolutionCards()}
                </Grid>
            </Grid >
        </Container>
    );
}

export default PokemonCard;