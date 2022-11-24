import { useState } from 'react';
import IEquipment from "../../interfaces/IEquipment";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

const EquipmentItem = ({id, nameOfEquipment, description, usedByCharacter, image} : IEquipment) => {

    const [open, setOpen] = useState(false);

    return (
        <article>
            <Col>
                <Card className="shadow-sm">
                    <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                    <Card.Body>
                    <Card.Title>{nameOfEquipment}</Card.Title>
                    <Card.Text>
                        <p>Game: {usedByCharacter}</p>
                        <a
                            className="mb-2"
                            style={{cursor:'pointer'}}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            Show Description
                        </a>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                            <p>{description}</p>
                            </div>
                        </Collapse>


                    </Card.Text>
                    <Badge pill bg="primary">ID: {id}</Badge>
                    </Card.Body>
                </Card>
            </Col>
        </article>
    )
}

export default EquipmentItem;