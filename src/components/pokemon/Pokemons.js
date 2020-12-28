import './Pokemons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function getPokemonsName(pokemons) {
    return (
        pokemons.map((p, index) =>
            // <Col style={{ padding: 0 }}>
            <Link to={{ pathname: '/pokemon/' + p.name, key: p.id }} >
                <Card className='center'>
                    <Card.Title className='_rank'>{'#' + p.id}</Card.Title>
                    <Card.Img className='image' src={p.sprites['front_default']} alt={p.name} />
                    <Card.Title className='_name'>{p.name.toUpperCase()}</Card.Title>
                </Card>
            </Link>

            // </Col>
        )
    )
};

function Pokemons({ pokemons }) {
    return (
        <Container >
            <Row style={{ justifyContent: 'center' }}>
                {getPokemonsName(pokemons)}
            </Row>
        </Container>
    );
};

export default Pokemons;