import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditWorld = () => {

    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [game, setGame] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const getWorldFromService = async () => {
        const world = await GameService.getWorldById(parseInt(id));
        setName(world.name);
        setGame(world.game);
        setImage(world.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;

        switch( name ){
            case "id":
                setId( value );
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

    const editWorld = () => {
        const editedWorld = {
            id: parseInt(id),
            name: name,
            game: game,
            image: image
        };
        GameService.putWorld ( editedWorld )
    }

    return (
        <>
        <section>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Set id (Wich game do you want to edit?)</Form.Label>
                        <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                        <Button variant="warning" onClick={getWorldFromService} className="mt-2">
                            Get World
                    </Button>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" onChange={changeHandler} type="text" value={name} />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" onChange={changeHandler} type="text" value={game}/>
                    </Form.Group>
                    <Button variant="success" onClick={editWorld}>
                        Finish editing
                    </Button>
                    </Form>
        </section>
        </>
    )
}

export default EditWorld