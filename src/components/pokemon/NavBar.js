import React from 'react';
import { Link, useHistory } from 'react-router-dom'

function NavBar({ keyword, setKeyword }) {
    const BarStyling = { width: "10rem", background: "lightgrey", color: 'black', border: "none", padding: "0.5rem" };
    var history = useHistory();

    return (
        <div style={{ backgroundColor: 'black' }}>
            <input
                style={BarStyling}
                key="random1"
                value={keyword}
                placeholder={"Enter Rank or Name"}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDownCapture={(e) => {
                    if (e.key === 'Enter') {
                        history.push('/pokemon/' + keyword);
                        e.target.value = ''
                    }
                }
                }
            />
            <Link to={{ pathname: '/pokemon/' + keyword, key: keyword }} >
                <button style={{ padding: '0.4rem' }}><i className='fa fa-search'></i></button>
            </Link>
        </div>
    );
}

export default NavBar;