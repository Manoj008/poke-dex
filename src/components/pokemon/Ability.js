import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllAbilities } from '../../services/Services';
import './Pokemons.css';
import 'font-awesome/css/font-awesome.min.css';
import { Modal, Button } from 'react-bootstrap';




function Ability({ abilities }) {
    const [ability, setAbility] = useState([]);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [summ, setSumm] = useState('');
    const [eff, setEff] = useState('');

    useEffect(() => {
        async function fetchAbilities() {
            const allAbilities = await getAllAbilities(abilities);
            allAbilities.map((one, index) => {
                let name = one.name;
                let summary = '';
                let effect = '';
                one.flavor_text_entries.map((summ, index) => {
                    if (summ.language.name === 'en') {
                        summary = summ.flavor_text;
                    }
                });
                one.effect_entries.map((det, index) => {
                    if (det.language.name === 'en') {
                        effect = det.effect;
                    }
                });

                let newAbility = {
                    id: name, name: name, summary: summary, effect: effect

                }
                setAbility(prevAbility => ([...prevAbility, newAbility]));
            });
        }
        fetchAbilities();
    }, []);

    function getAbility(abilities) {

        const handleClose = () => {
            setShow(false);
        };
        const handleShow = (index) => {
            console.log('in' + index);
            setName(ability[index].name);
            setSumm(ability[index].summary);
            setEff(ability[index].effect);
            setShow(true);
        };

        return (
            abilities.map((myAbility, index) =>
                <>

                    <Col xs='12' sm='6' md='12' lg='6' xl='6' style={{ cursor: 'pointer' }} onClick={() => handleShow(index)}>
                        <h5 className='ability-style'>{myAbility.ability.name + ' '}<i className='fa fa-info-circle' style={{ fontSize: '0.8rem' }}></i></h5>
                    </Col>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Header>
                            <Modal.Body>{summ}</Modal.Body>
                        </Modal.Header>
                        <Modal.Header>
                            <Modal.Body>{eff}</Modal.Body>
                        </Modal.Header>
                    </Modal>
                </>
            )
        );
    };

    return (
        <div>
            <h4 style={{ textAlign: 'left', marginLeft: '10px' }}>Abilities</h4>
            <Row className='no-gutters'>
                {getAbility(abilities)}
            </Row>
        </div >
    );
};

export default Ability;