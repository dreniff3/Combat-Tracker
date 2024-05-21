import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import HealthBar from "./HealthBar";
import { IoIosPerson } from "react-icons/io";
import { PiShieldBold } from "react-icons/pi";
import { GiHealthNormal } from "react-icons/gi";
import { GiDrippingKnife } from "react-icons/gi";

const Fighter = ({ fighter }) => {
    const [hp, setHP] = useState(fighter.currHealth);
    const [dmg, setDmg] = useState(1);
    const [heal, setHeal] = useState(1);

    // const handleDamage = (e) => {
    //     e.preventDefault();
    //     const amount = dmg;
    //     console.log(dmg);
    //     setHP(hp - amount);
    //     console.log(hp);
    //     setDmg(1);
    // };

    // const handleHeal = (e) => {
    //     e.preventDefault();
    //     const amount = heal;
    //     console.log(heal);
    //     setHP(hp + amount);
    //     console.log(hp);
    //     setHeal(1);
    // }

    const handleDamage = () => {
        setHP(hp => hp - 1);
    };

    const handleHeal = () => {
        setHP(hp => hp + 1);
    }

    useEffect(() => {
        if (hp < 0) {
            setHP(0);
        } else if (hp > fighter.maxHealth) {
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
                    <Card.Text as="h5" id="health">
                        HP: 
                        {/* <form 
                            className="health-input"
                            onSubmit={handleDamage}
                        >
                            <input 
                                type="number"
                                value={dmg}
                                onChange={(e) => setDmg(dmg => e.target.value)}
                            />
                            <button 
                                className="dmg-btn"
                                style={{
                                    width: 'fit-content',
                                    border: 'none',
                                }}
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
                        </form> */}
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
                        {/* 
                        
                        implement onClick for incrementing currHealth

                        */}
                        {/* <form 
                            className="health-input"
                            onSubmit={handleHeal}
                        >
                            <input 
                                type="number"
                                value={heal}
                                onChange={(e) => setHeal(heal => e.target.value)}
                            />
                            <button 
                                className="heal-btn"
                                style={{
                                    width: 'fit-content',
                                    border: 'none',
                                }}
                            >
                                <GiHealthNormal 
                                    style={{
                                        color: '#21CA20',
                                        fontSize: '20px',
                                        marginLeft: '-5px',
                                    }}
                                />
                            </button>
                        </form> */}
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
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Fighter;