import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import HealthBar from "./HealthBar";
import { IoIosPerson } from "react-icons/io";
import { PiShieldBold } from "react-icons/pi";
import { GiHealthNormal } from "react-icons/gi";
import { GiDrippingKnife } from "react-icons/gi";

const Fighter = ({ fighter }) => {
    const [hp, setHP] = useState(fighter.currHealth);

    const handleDamage = () => {
        fighter.currHealth = fighter.currHealth - 1;
        setHP(fighter.currHealth);
    };

    const handleHeal = () => {
        fighter.currHealth = fighter.currHealth + 1;
        setHP(fighter.currHealth);
    }

    useEffect(() => {
        if (hp < 0) {
            fighter.currHealth = 0;
            setHP(0);
        } else if (hp > fighter.maxHealth) {
            fighter.currHealth = fighter.maxHealth;
            setHP(fighter.maxHealth);
        }
    }, [hp])

    return (
        <Card className="my-3 p-3 rounded fighter-card">
            {fighter.image === '' ? (
                <IoIosPerson 
                    style={{
                        color: 'gray',
                        backgroundColor: 'white',
                        fontSize: '50px',
                        borderRadius: '2px',
                    }}
                />
            ) : (
                <Card.Img src={fighter.image} />
            )}
            <Card.Body className="fighter-card--body">
                <Card.Title as="div" className="fighter-card--header">
                    <strong>{fighter.name}</strong>
                    <Card.Text as="h5">
                        <PiShieldBold 
                            style={{
                                fontSize: '22px',
                                position: 'relative',
                                fontWeight: '800',
                            }}
                        />:<span>{fighter.armor}</span></Card.Text>
                </Card.Title>
                <div className="fighter-card--stats">
                    <Card.Text as="h5" className="health">
                        <div className="healthnum-container">
                            HP: {hp} / {fighter.maxHealth}
                        </div> 

                        <div className="healthui-container">
                            <button 
                                className="dmg-btn"
                                style={{
                                    width: 'fit-content',
                                    border: 'none',
                                }}
                                onClick={handleDamage}
                            >
                                <GiDrippingKnife 
                                    style={{
                                        color: '#DE2802',
                                        fontSize: '30px',
                                        transform: 'rotateX(45deg) rotateY(160deg)',
                                        marginTop: '-7px',
                                        marginLeft: '-8px'
                                    }}
                                />
                            </button>

                            <HealthBar currHealth={hp} maxHealth={fighter.maxHealth} />

                            <button 
                                className="heal-btn"
                                style={{
                                    width: 'fit-content',
                                    border: 'none',
                                }}
                                onClick={handleHeal}
                            >
                                <GiHealthNormal 
                                    style={{
                                        color: '#21CA20',
                                        fontSize: '20px',
                                        marginLeft: '-5px',
                                    }}
                                />
                            </button>
                        </div>

                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Fighter;