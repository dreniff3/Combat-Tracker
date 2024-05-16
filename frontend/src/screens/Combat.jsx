import { useEffect, useState } from 'react';
import FighterList from '../components/FighterList';

const Combat = ({ fighters }) => {
    const [turn, setTurn] = useState(0);
    const [round, setRound] = useState(1);
    let header;

    if (round === 0) {
        header = 'Combat Tracker'
    } else {
        header = 'Round ' + String(round);
    }

    useEffect(() => {
        if (turn === fighters.length) {
            setTurn(0);
            setRound(round + 1);
        }
    }, [turn]);

    return (
        <>
            <header>
                <h1>{header}</h1>
            </header>
            <FighterList fighters={fighters} turn={turn} />
            {/* Next Turn Btn */}
            <button
                onClick={() => setTurn(turn + 1)}
            >Next Turn</button>
        </>
    );
};

export default Combat;