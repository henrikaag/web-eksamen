import ICharacter from "../../interfaces/ICharacter";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import '../../css/Item.css';

const CharacterItem = ({id, name, game, type, equipment, image } : ICharacter) => {
    
    // ITEMS ON PAGE
    return (
        <article>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Game: {game}</p>
                            <p>Type: {type}</p>
                            <p>Equipment: {equipment}</p>
                            <Badge pill bg="primary">ID: {id}</Badge>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </article>
    )
}

export default CharacterItem;