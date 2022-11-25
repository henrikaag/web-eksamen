import IGame from "../../interfaces/IGame";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import '../../css/Item.css';

const GameItem = ({id, title, platform, releaseYear, price, image } : IGame) => {

    //ITEMS ON PAGE
    return (
        <article>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="game-card-image"/>
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>Platform: {platform}</p>
                            <p>Release Year: {releaseYear}</p>
                            <p>{price}$</p>
                            <Badge pill bg="primary">ID: {id}</Badge>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </article>
    )
}

export default GameItem;