import { Card } from "react-bootstrap";
import { IoIosPerson } from "react-icons/io";

const Fighter = ({ fighter }) => {
    let healthPercentage = (Math.floor(100 * fighter.currHealth / fighter.maxHealth));
    let healthColor;
    healthPercentage < 100 ? healthColor = '#DE2802' : healthColor = '#21CA20';
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
                        fontSize: '36px',
                        borderRadius: '2px',
                    }}
                />
            ) : (
                <Card.Img src={fighter.image} />
            )}
            <Card.Body className="fighter-card--body">
                <Card.Title as="div" className="fighter-card--name">
                    <strong>{fighter.name}</strong>
                </Card.Title>
                <div className="fighter-card--stats">
                    <Card.Text as="h5">
                        HP: <div class="health-container">
                                <div class="health-container--bar" style={healthStyles}></div>
                            </div>
                    </Card.Text>
                    <Card.Text as="h5">
                        AC: {fighter.armor}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Fighter;