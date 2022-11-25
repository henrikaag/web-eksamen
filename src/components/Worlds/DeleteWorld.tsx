import { ChangeEvent, useContext, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { WorldContext } from "../../contexts/WorldContext";
import IWorldContext from "../../interfaces/IWorldContext";

const DeleteWorld = () => {

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [game, setGame] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const {deleteWorldById} = useContext(WorldContext) as IWorldContext

    const getWorldFromService = async () => {
        const world = await GameService.getWorldById( id );
        setName(world.name);
        setGame(world.game);
        setImage(world.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;

        switch( name ){
            case "id":
                setId( parseInt(e.currentTarget.value) );
            break;
            case "name":
                setName( value );
            break;
            case "game":
                setGame( value );
            break;
            case "image":
                setImage( value );
            break;
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId (parseInt(e.currentTarget.value))
    }

    const deleteWorld = () => {
        deleteWorldById( id );
        
    }




    return (
        <>
        <section>
            <Form>
                <Form.Group className="mb-2"controlId="formGridPassword">
                    <Form.Label>Set id (Wich world do you want to delete?)</Form.Label>
                    <Form.Control name="id" onChange={handleChange} type="number" value={id} />
                </Form.Group>

                <Button variant="warning" onClick={getWorldFromService} className="me-2 mb-2">
                        Get World
                </Button>

                <Button variant="danger mb-2" onClick={deleteWorld}>
                        Delete World
                </Button>
            </Form>
            <i>A preview of the world you want to delete will show up below when you have entered an id and clicked "Get World"</i>
            <Col>
                <Card onChange={changeHandler} className="mt-3">
                        <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Game: {game}</p>
                            <Badge pill bg="primary">ID: {id}</Badge>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </section>
        </>
    )
}

export default DeleteWorld;