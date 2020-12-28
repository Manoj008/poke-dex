import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Shop } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom'
import { getAllPokemons } from '../../services/Services';

function SearchBar({ keyword, setKeyword }) {
    const [pokemonsName, setPokemonsName] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(false);
    var history = useHistory();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            let response = await getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=1200');
            let names = response.results.map(p => {
                return (
                    p.name
                )
            })
            setPokemonsName(names);
            setLoading(false);
        }
        fetchData();
    }, [keyword]);

    const onTextChangeHandler = (e) => {
        const value = e.target.value;
        let suggest = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggest = pokemonsName.sort().filter(v => regex.test(v))
        }

        setKeyword(value);
        setSuggestions(suggest);
    };

    function selectedText(value) {
        setKeyword('');
        setSuggestions([]);
        history.push('/pokemon/' + value.toLowerCase());
    };




    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => selectedText(item)}>{item}</li>))
                }
            </ul>
        );
    }


    function cancelSearch() {

        setSearch(true);
        setKeyword('');
        setSuggestions([]);
    };

    return (
        <div>
            {!search && (<div className='heading-block' >
                <h3 className='heading'>Welcome to Poke-dex</h3>
                <i onClick={() => cancelSearch()} className='fa fa-search' style={{ fontSize: '1.5rem', marginBottom: '0.2rem', paddingBottom: '0.2rem' }}></i></div>)}
            { search && (
                <div className='search-bar'>
                    <input
                        className='searchBox'
                        key="random1"
                        value={keyword}
                        placeholder={"Enter Rank or Name"}
                        onChange={onTextChangeHandler}
                        onKeyDownCapture={(e) => {
                            if (e.key === 'Enter') {
                                history.push('/pokemon/' + keyword.toLowerCase());
                                e.target.value = ''
                            }
                        }
                        }
                    />
                    <i onClick={() => setSearch(false)} className='fa fa-close' style={{ fontSize: '1.5rem', marginBottom: '0.2rem', paddingBottom: '0.2rem' }}></i>
                </div>
            )}
            <div className='suggest-block'>
                {renderSuggestions()}
            </div>
        </div >
    );
}

export default SearchBar;