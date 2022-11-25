import { ChangeEvent, useContext, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { EquipmentContext } from "../../contexts/EquipmentContext";
import IEquipmentContext from "../../interfaces/IEquipmentContext";

const DeleteEquipment = () => {
    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [description, setDesc] = useState<string>("")
    const [usedByCharacter, setUsedByCharacter] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const { deleteEquipmentById } = useContext(EquipmentContext) as IEquipmentContext;

    const getEquipmentFromService = async () => {
        const equipment = await GameService.getEquipmentById(id);
        setName(equipment.name);
        setDesc(equipment.description);
        setUsedByCharacter(equipment.usedByCharacter);
        setImage(equipment.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch( name ){
            case "id":
                setId( parseInt(e.currentTarget.value) );
            break;
            case "name":
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId (parseInt(e.currentTarget.value))
    }

    const deleteEquipment = () => {
        deleteEquipmentById( id );
        
    }

    return (
        <>
        <section>
            <Form>
                <Form.Group className="mb-2"controlId="formGridPassword">
                    <Form.Label>Set id (Wich Equipment do you want to delete?)</Form.Label>
                    <Form.Control name="id" onChange={handleChange} type="number" value={id} />
                </Form.Group>

                <Button variant="warning" onClick={getEquipmentFromService} className="me-2 mb-2">
                        Get Equipment
                </Button>

                <Button variant="danger mb-2" onClick={deleteEquipment}>
                        Delete Equipment
                </Button>
            </Form>
            <i>A preview of the equipment you want to delete will show up below when you have entered an id and clicked "Get equipment"</i>
            <Col>
                <Card onChange={changeHandler} className="mt-3">
                        <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
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