import { useEffect, useState } from 'react';
import FighterList from '../components/FighterList';
import { PiSword } from "react-icons/pi";
import { FaSkullCrossbones } from "react-icons/fa";

const CombatScreen = ({ fighters }) => {
    const [turn, setTurn] = useState(0);
    const [round, setRound] = useState(0);
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

    useEffect(() => {
        if (round === 0) {
            setTurn(0);
        }
    }, [round]);

    return (
        <>
            <header>
                <h1>{header}</h1>
            </header>
            <FighterList fighters={fighters} turn={turn} />
            {/* Next Turn Btn */}
            <div className="buttons">
                <button
                    disabled={round === 0 ? true : false}
                    onClick={() => setTurn(turn + 1)}
                >Next Turn</button>
                {round === 0 ? (
                <button
                    onClick={() => setRound(1)}
                >Start Combat <PiSword /></button>
                ) : (
                <button
                    onClick={() => setRound(0)}
                >End Combat <FaSkullCrossbones /></button>
                )}
            </div>
        </>
    );
};

export default CombatScreen;