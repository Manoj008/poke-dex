import './Pokemons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import { Card, Grid, CardActionArea, CardMedia, CardContent, Typography, makeStyles, colors, Paper } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = makeStyles(theme => ({

    pokedexContainer: {
        [theme.breakpoints.up('xs')]: {
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '2rem'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingTop: '2rem'
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '2rem'
        }

    },
    pokecard: {
        position: 'relative',
        height: '8.8rem',
        width: '6.5rem',
        maxHeight: '9rem',
        backgroundColor: '#444444'
    },
    // circlularBack: {
    //     borderRadius: '50%',
    //     margin: '0.5rem',
    //     zIndex: '1'
    // },
    rank: {
        position: 'absolute',
        zIndex: '1',
        fontSize: '0.6rem',
        padding: '0.05rem 0.5rem 0.05rem 0.5rem',
        backgroundColor: '#CEBF7B',
        borderBottomRightRadius: '0.4rem'

    },
    cardImage: {
        height: '6rem',
        padding: '0.5rem'
    }
    , titleContent: {
        // fontSize: '0.70rem',
        margin: '0.5rem 0.05rem 0.2rem 0.05rem',
        padding: '0 0'
    },
    title: {
        fontSize: '0.80rem',
        margin: '0rem 0.5rem ',
        padding: '0 0',
        color: 'white'
    }

}));



function getPokemonsName(pokemons, history, setKeyword) {

    const onCardClickHandler = (p, history) => {
        history.push('/pokemon/' + p.id)
        setKeyword('');
    }

    const classes = styles();
    return (
        pokemons.map((p, index) =>
            // <Col style={{ padding: 0 }}>

            <Grid key={p.keys} item onClick={() => onCardClickHandler(p, history)}>
                <Paper className={classes.pokecard}>
                    <Typography
                        variant='h1'
                        component='h5'
                        className={classes.rank}>
                        {'#' + p.id}
                    </Typography>
                    <CardActionArea>
                        <CardMedia
                            className={classes.cardImage}
                            component="img"
                            alt={p.name}
                            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                            title={p.name}
                        />
                        <CardContent className={classes.titleContent}>
                            <Typography
                                align='center'
                                display='block'
                                variant="p"
                                component="h6"
                                className={classes.title}>

                                {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Paper>
            </Grid>


            // </Col>
        )
    )
};

function Pokemons({ pokemons, setKeyword }) {
    var history = useHistory();
    const classes = styles();
    return (
        <Grid container spacing={1} justify="center" className={classes.pokedexContainer}>
            {getPokemonsName(pokemons, history, setKeyword)}
        </Grid>
    );
};

export default Pokemons;