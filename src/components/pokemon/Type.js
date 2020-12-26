import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Pokemons.css';

function getType(types) {
    var typeColor = {
        normal: 'linear-gradient(#A4ACAF 100%,transparent)',
        fighting: 'linear-gradient(#D56723 100%,transparent)',
        flying: 'linear-gradient(to bottom,#3DC7EF 50%, #BDB9B8 50%)',
        poison: 'linear-gradient(#B97FC9 100%,transparent)',
        ground: 'linear-gradient(to bottom,#F7DE3F 50%, #AB9842 50%)',
        rock: 'linear-gradient(#A38C21 100%,transparent)',
        bug: 'linear-gradient(#729F3F 100%,transparent)',
        ghost: 'linear-gradient(#7B62A3 100%,transparent)',
        steel: 'linear-gradient(#9EB7B8 100%,transparent)',
        fire: 'linear-gradient(#FD7D24 100%,transparent)',
        water: 'linear-gradient(#4592C4 100%,transparent)',
        grass: 'linear-gradient(#9BCC50 100%,transparent)',
        electric: 'linear-gradient(#EED535 100%,transparent)',
        psychic: 'linear-gradient(#F366B9 100%,transparent)',
        ice: 'linear-gradient(#51C4E7 100%,transparent)',
        dragon: 'linear-gradient(to bottom,#53A4CF 50%, #F16E57 50%)',
        dark: 'linear-gradient(#717171 100%,transparent)',
        fairy: 'linear-gradient(#FDB9E9 100%,transparent)',
        unknown: 'linear-gradient(#000 100%,transparent)',
        shadow: 'linear-gradient(#000 100%,transparent)'
    };

    return (
        types.map((type, index) =>
            <Col xs='6' sm='6' md='6' lg='6' xl='6'>
                <h5 className='ability-style' style={{ backgroundImage: typeColor[type.type.name], color: 'white' }} key={type.type.name}>{type.type.name}</h5>
            </Col>

        )
    );
};

function Type({ types }) {
    return (
        <div>
            <h4 style={{ textAlign: 'left', marginLeft: '10px' }}>Type</h4>
            <Row className='no-gutters'>
                {getType(types)}
            </Row>
        </div >
    );
};

export default Type;