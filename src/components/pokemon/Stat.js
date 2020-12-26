import { Col, Row } from "react-bootstrap";
import React, { useState } from 'react';
import PokemonDetails from "./PokemonDetails";
import './Pokemons.css';
import BarChart from './BarChart'

function getStats(stats, data, setData) {
    return (
        stats.map((s, index) => {
            return (

                (s.stat.name !== 'special-attack' && s.stat.name !== 'special-defense') &&
                (
                    <>
                        <Col className='stat-row'>
                            {console.log(s.stat.name)}
                            <h6 className='stat-col'>{s.stat.name}</h6>
                            <p style={{ padding: '0rem', margin: '0rem 0rem 0.4rem' }}>{s.base_stat}</p>
                        </Col >
                        {/* {() => setData([s.base_stat])} */}
                    </>

                )
            )
        })
        // return (
        //     <BarChart data={data} />
    )
};

function Stat({ stats }) {
    const [data, setData] = useState([]);
    // getStats(stats, data, setData);
    return (
        <Row className='no-gutters stat-row stat' >
            {getStats(stats, data, setData)}
            {/* <BarChart data={data} /> */}
        </Row>
    );
};

export default Stat;