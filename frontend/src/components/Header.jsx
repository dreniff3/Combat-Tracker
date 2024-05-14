import React from 'react'

const Header = ({ turn }) => {
    let header;
    if (turn === 0) {
        header = 'Combat Tracker'
    } else {
        header = 'Round ' + String(turn);
    }

    return (
        <header>
            <h1>{header}</h1>
        </header>
    );
};

export default Header;