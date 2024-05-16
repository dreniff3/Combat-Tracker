import Fighter from './Fighter';
import { PiHandPointing } from "react-icons/pi";
// import fighters from '../fighters';

const FighterList = ({ fighters, turn }) => {
    // Change to props passed from App.jsx on 'Next Turn' click
    let thisTurn = fighters[turn-1];

    return (
        <div className="fighter-list">
            {fighters.map((fighter) => (
                <div className="fighter">
                    {thisTurn === fighter ? (
                        <div id="curr-turn">
                        <PiHandPointing 
                            style={{
                                fontSize: '50px',
                                transform: 'rotate(90deg)',
                            }}
                        /><Fighter fighter={fighter} />
                        </div>
                    ) : (
                    <Fighter fighter={fighter} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default FighterList;