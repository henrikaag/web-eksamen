import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import IWorld from "../../interfaces/IWorld"

const WorldItem = ({id, name, game, image} : IWorld) => {

    //ITEMS ON PAGE
    return (
        <article>
            <Col>
                <Card className="shadow-sm">
                    <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Game: {game}</p>

                    </Card.Text>
                    <Badge pill bg="primary">ID: {id}</Badge>
                    </Card.Body>
                </Card>
            </Col>
        </article>
    )

}

export default WorldItem;