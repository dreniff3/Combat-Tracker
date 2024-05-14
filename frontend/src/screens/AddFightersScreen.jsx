import { Row, Col } from 'react-bootstrap';
import Fighter from '../components/Fighter';
import fighters from '../fighters';

const AddFightersScreen = () => {
    return (
        <Row>
            {fighters.map((fighter) => (
                <Col sm={12}>
                    {console.log(fighter)}
                    <Fighter fighter={fighter} />
                </Col>
            ))}
        </Row>
    );
};

export default AddFightersScreen;