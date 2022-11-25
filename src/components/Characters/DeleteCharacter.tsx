import { ChangeEvent, useContext, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import ICharacterContext from "../../interfaces/ICharacterContext";
import { CharacterContext } from "../../contexts/CharacterContext";

const DeleteCharacter = () => {
    const [id, setId] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [equipment, setEquipment] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const { deleteCharactersById } = useContext(CharacterContext) as ICharacterContext

    // GET
    const getCharacterFromService = async () => {
        const character = await GameService.getCharacterById(id);
        setName(character.name);
        setGame(character.game);
        setType(character.type);
        setEquipment(character.equipment);
        setImage(character.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch ( name ){
            case "id":
                setId( parseInt(e.currentTarget.value ) );
            break;
            case "name":
                setName ( value );
            break;
            case "game":
            setGame ( value );
            break;
            case "type":
                setType( value );
            break;
            case "equipment":
                setEquipment( value );
            break;
            case "image":
                setImage( value );
            break;
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId (parseInt(e.currentTarget.value))
    }

    // DELETE
    const deleteCharacter = () => {
        deleteCharactersById( id );

    }

    return (
        <>
        <section>
            <Form>
                <Form.Group className="mb-2"controlId="formGridPassword">
                    <Form.Label>Set id (Wich character do you want to delete?)</Form.Label>
                    <Form.Control name="id" onChange={handleChange} type="number" value={id} />
                </Form.Group>

                <Button variant="warning" onClick={getCharacterFromService} className="me-2">
                        Get Character
                </Button>

                <Button variant="danger" onClick={deleteCharacter}>
                        Delete Character
                </Button>
            </Form>
            <Col>
                <Card onChange={changeHandler} className="mt-3">
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
        </section>
        </>
    )
}

export default DeleteCharacter;