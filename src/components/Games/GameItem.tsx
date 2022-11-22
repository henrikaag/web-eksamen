import IGame from "../../interfaces/IGame";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const GameItem = ({id, title, platform, releaseYear, price, image } : IGame) => {
    return (
        <article>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={`https://localhost:7050/images/game-images/${image}`} />
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>Platform: {platform}</p>
                            <p>Release Year: {releaseYear}</p>
                            <p>{price}$</p>
                            Description
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </article>
    )
}

export default GameItem;