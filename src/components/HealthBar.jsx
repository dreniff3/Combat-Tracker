import { useEffect } from "react";

const HealthBar = ({ currHealth, maxHealth }) => {
    let healthPercentage = (Math.floor(100 * currHealth / maxHealth));
    let healthColor;
    healthPercentage < 30 ? healthColor = '#DE2802' 
    : healthPercentage < 100 ? healthColor = '#F0DA0E' 
    : healthColor = '#21CA20';
    let healthStyles = {
        width: `${healthPercentage}%`,
        height: '100%',
        background: `${healthColor}`,
        borderRadius: '15px',
    };

    useEffect(() => {
        healthPercentage = (Math.floor(100 * currHealth / maxHealth));
    }, [currHealth])

    return (
        <div className="healthbar-container">
            <div className="health-container--bar" style={healthStyles}></div>
        </div>
    );
};

export default HealthBar;