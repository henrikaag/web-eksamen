import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

const DeleteEquipment = () => {
    const [id, setId] = useState<string>("")
    const [nameOfEquipment, setName] = useState<string>("")
    const [description, setDesc] = useState<string>("")
    const [usedByCharacter, setUsedByCharacter] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const getEquipmentFromService = async () => {
        const equipment = await GameService.getEquipmentById(parseInt(id));
        setName(equipment.nameOfEquipment);
        setDesc(equipment.description);
        setUsedByCharacter(equipment.usedByCharacter);
        setImage(equipment.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch( name ){
            case "id":
                setId( value );
            break;
            case "nameOfEquipment":
                setName( value );
            break;
            case "description":
                setDesc( value );
            break;
            case "usedByCharacter":
                setImage( value );
            break;
            case "image":
                setImage( value );
            break;

        }
    }

    const DeleteEquipment =() => {
        const editedEquipment = {
            id: parseInt(id),
            nameOfEquipment: nameOfEquipment,
            usedByCharacter: usedByCharacter,
            description: description,
            image: image
        };
        GameService.putEquipment( editedEquipment );
    }

    return (
        <>
        <section>
            <Form>
                <Form.Group className="mb-2"controlId="formGridPassword">
                    <Form.Label>Set id (Wich game do you want to delete?)</Form.Label>
                    <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                </Form.Group>

                <Button variant="warning" onClick={getEquipmentFromService} className="me-2 mb-2">
                        Get World
                </Button>

                <Button variant="danger mb-2">
                        Delete World
                </Button>
            </Form>
            <i>A preview of the world you want to delete will show up below when you have entered an id and clicked "Get World"</i>
            <Col>
                <Card onChange={changeHandler} className="mt-3">
                        <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                        <Card.Body>
                        <Card.Title>{nameOfEquipment}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                            <Badge pill bg="primary">ID: {id}</Badge>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </section>
        </>
    )
}

export default DeleteEquipment;