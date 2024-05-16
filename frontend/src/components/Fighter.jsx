import { Card } from "react-bootstrap";
import { IoIosPerson } from "react-icons/io";
import { PiShieldBold } from "react-icons/pi";
import { GiHealthNormal } from "react-icons/gi";
import { GiDrippingKnife } from "react-icons/gi";

const Fighter = ({ fighter }) => {
    let healthPercentage = (Math.floor(100 * fighter.currHealth / fighter.maxHealth));
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
                        {/* 

                        implement onClick for decrementing currHealth
                        
                        */}
                        <div className="health-input">
                            <input type="number" />
                            <GiDrippingKnife 
                                style={{
                                    color: '#DE2802',
                                    fontSize: '30px',
                                    transform: 'rotateX(45deg) rotateY(160deg)',
                                    marginTop: '-7px',
                                }}
                            />
                        </div>
                        <div className="health-container">
                            <div className="health-container--bar" style={healthStyles}></div>
                        </div>
                        {/* 
                        
                        implement onClick for incrementing currHealth

                        */}
                        <div className="health-input">
                            <input type="number" />
                            <GiHealthNormal 
                                style={{
                                    color: '#21CA20',
                                    fontSize: '20px',
                                    marginLeft: '5px',
                                }}
                            />
                        </div>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Fighter;