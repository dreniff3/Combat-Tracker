import { useState } from "react";
import { FaDiceD20 } from "react-icons/fa";

const DieRoller = () => {
    const [numDie, setNumDie] = useState(1);
    const [diceType, setDiceType] = useState(20);
    const [result, setResult] = useState('00');

    const handleRoll = (e) => {
        e.preventDefault();
        let rollValue;
        let total = 0;

        for (let i = 0; i < numDie; i++) {
            rollValue = Math.floor(Math.random() * diceType) + 1
            console.log(rollValue);
            total = total + rollValue;
        }

        if (total < 10) {
            total = '0'.concat(total.toString());
        } else {
            total = total.toString();
        }

        setResult(total);
    }

    return (
        <form 
            className="die-roller"
            onSubmit={handleRoll}
        >
            <input 
                type="number" 
                value={numDie}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setNumDie(e.target.value)}
            />
            <span>d</span>
            <input 
                type="number" 
                value={diceType}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setDiceType(e.target.value)}
            />
            <button id="roll-btn">
                <FaDiceD20 />
            </button>
            <div className="result">
                <h3>{result}</h3>
            </div>
        </form>
    );
};

export default DieRoller;