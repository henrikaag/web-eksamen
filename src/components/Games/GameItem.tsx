import { FC, useState } from 'react';
import IGame from "../../interfaces/IGame";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';



import '../../css/GameItem.css';

const GameItem : FC<IGame >= ({id, title, platform, releaseYear, price, image } : IGame) => {

    return (
        <article>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={`https://localhost:7050/images/game-images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        <Badge pill bg="primary">ID: {id}</Badge>
                            <p>Platform: {platform}</p>
                            <p>Release Year: {releaseYear}</p>
                            <p>{price}$</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </article>
    )
}

export default GameItem;