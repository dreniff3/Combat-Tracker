import { useEffect, useState } from 'react';
import FighterList from '../components/FighterList';
import AddFighters from '../components/AddFighters';
import { PiSword } from "react-icons/pi";
import { FaSkullCrossbones } from "react-icons/fa";

const CombatScreen = () => {
    const [fighters, setFighters] = useState([]);
    const [turn, setTurn] = useState(0);
    const [round, setRound] = useState(0);
    let header;

    if (round === 0) {
        header = 'Combat Tracker'
    } else {
        header = 'Round ' + String(round);
    }

    const endCombat = () => {
        setRound(0);
        setFighters([]);
    }

    useEffect(() => {
        if (fighters.length > 1 && turn === fighters.length) {
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
            {round === 0? (
                <AddFighters 
                    fighters={fighters}
                    setFighters={setFighters}
                />
            ) : (
            <FighterList 
                fighters={fighters}
                turn={turn}
            />
            )}
            {/* Next Turn Btn */}
            <div className="buttons">
                <button
                    style={round === 0 ? ({display: 'none'}) : ({display: 'inline-block'})}
                    disabled={round === 0 ? true : false}
                    onClick={() => setTurn(turn + 1)}
                >Next Turn</button>
                {round === 0 ? (
                <button
                    disabled={fighters.length < 2 ? true : false}
                    onClick={() => setRound(1)}
                >Start Combat <PiSword /></button>
                ) : (
                <button
                    onClick={endCombat}
                >End Combat <FaSkullCrossbones /></button>
                )}
            </div>
        </>
    );
};

export default CombatScreen;