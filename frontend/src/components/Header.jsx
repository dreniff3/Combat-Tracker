import React from 'react'

const Header = ({ round }) => {
    let header;
    if (round === 0) {
        header = 'Combat Tracker'
    } else {
        header = 'Round ' + String(round);
    }

    return (
        <header>
            <h1>{header}</h1>
        </header>
    );
};

export default Header;