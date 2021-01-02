import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Pokemons.css';

const useStyles = makeStyles(theme => ({
    root: {

    },
    paperBackground: {
        color: 'black',
        backgroundColor: '#555',
        boxShadow: 'none',
        margin: '0rem 0rem'
    },
    evoChart: {
        borderRadius: '2%',
        border: '2px solid black',
        boxShadow: '4px 4px 8px black',
        padding: '1rem',
        backgroundImage: 'linear-gradient(120deg, rgb(68, 68, 71), rgb(15, 15, 24))',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    evoImage: {
        backgroundImage: 'linear-gradient(120deg, rgb(136, 136, 139), rgb(43, 43, 46))',
        borderRadius: '50%',
        border: '5px solid white',
        boxShadow: '0.3rem 0.3rem 1rem black',
        marginBottom: '1rem',
        width: '8rem',
        minWidth: '6rem',
        padding: '0.8rem',
    },
    changeFlex: {

    },
    changeArrow: {
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    arrow: {
        fontSize: '3rem',
        color: '#aaa',
        [theme.breakpoints.up('xs')]: {

            marginBottom: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            transform: 'rotate(-90deg)',
            marginLeft: '1rem',
            marginRight: '1rem',
            marginBottom: '2rem'

        },
    }
}));

var evoME = 2;

const getEvo = (evolution, classes) => {
    var len = evolution.length;
    console.log('length  ' + len);
    return (
        evolution.map((evo, i) => {
            console.log('evo ' + evo.sprite);

            return (
                Array.isArray(evo) ? (
                    <Grid item md={evoME}>
                        <Grid container justify='space-evenly' alignItems='center' spacing='5' className={classes.changeFlex}>
                            {getSecEvo(evo, classes)}
                        </Grid>

                    </Grid>) :
                    (< Grid item direction='row' justify='center' alignContent='center' >
                        <Grid container direction='row' justify='center' alignItems='center' className={classes.changeArrow}>
                            <Link to={{ pathname: '/pokemon/' + evo.species_name, key: evo.species_name }}>
                                <Card.Img src={evo.sprite} alt={evo.species_name} className={classes.evoImage} />
                                <h3 className='evo-name'>{evo.species_name.charAt(0).toUpperCase() + evo.species_name.slice(1)}</h3>
                            </Link>
                            {len !== i + 1 && <i className={classes.arrow}><i className='fa fa-chevron-down'></i></i>}
                        </Grid>
                    </Grid >
                    )
            )

        }
        )
    )
};

function getSecEvo(evo, classes) {
    if (evo.length > 2) {
        evoME = 8
    } else {
        evoME = 2
    }

    return (
        evo.map((e, i) => {
            return (
                < Grid item>
                    <Link to={{ pathname: '/pokemon/' + e.species_name, key: e.species_name }}>
                        <Card.Img src={e.sprite} alt={e.species_name} className={classes.evoImage} />
                        <h3 className='evo-name'>{e.species_name.charAt(0).toUpperCase() + e.species_name.slice(1)}</h3>
                    </Link>
                </Grid >
            )
        })
    );
};

function Evolve({ evolution }) {

    const classes = useStyles();
    return (
        <Paper className={classes.paperBackground}>
            <Grid >
                <h3 style={{ textAlign: 'center', margin: '1rem 0rem' }}>Evolutions</h3>
                <Grid container justify='center' alignItems='center' className={classes.evoChart}>
                    {getEvo(evolution, classes)}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Evolve;