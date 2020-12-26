import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Pokemons.css';

function getEvo(evolution) {
    return (
        evolution.map((evo, index) =>
            <div className='evo-item '>
                <Link to={{ pathname: '/pokemon/' + evo.name, key: evo.id }}>
                    <Card.Img src={evo.sprites.front_default} alt={evo.name} className='evo-img' />
                    <h5 className='evo-name'>{evo.name.toUpperCase()}</h5>
                </Link>
            </div >
        )
    );
};

function Evolve({ evolution }) {
    return (
        <div >
            <h3 style={{ textAlign: 'left', marginLeft: '30px' }}>Evolutions</h3>
            <Row style={{ justifyContent: 'center' }} className='evo-chart no-gutters' >
                {getEvo(evolution)}
            </Row>

        </div>
    );
};

export default Evolve;