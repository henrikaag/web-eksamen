import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditCharacter = () => {
    const [id, setId] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [equipment, setEquipment] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const getCharacterFromService = async () => {
        const character = await GameService.getCharacterById(parseInt(id));
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
                setId( value );
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

    const editCharacter = () => {
        const editedCharacter = {
            id: parseInt(id),
            name: name,
            game: game,
            type: type,
            equipment: equipment,
            image: image
        };
        console.log(editedCharacter);
        GameService.putCharacter( editedCharacter );
    }

    return (
        <section>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Set id (Wich character do you want to edit?)</Form.Label>
                        <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                        <Button variant="warning" onClick={getCharacterFromService} className="mt-2">
                            Get Character
                    </Button>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={changeHandler} type="text" value={name} />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Game</Form.Label>
                        <Form.Control name="game" onChange={changeHandler} type="text" value={game}/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Type</Form.Label>
                        <Form.Control name="type" onChange={changeHandler} type="text" value={type}/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Equipment</Form.Label>
                        <Form.Control name="equipment" onChange={changeHandler} type="text" value={equipment}/>
                    </Form.Group>
                    <Button variant="success" onClick={editCharacter}>
                        Finish editing
                    </Button>
                    </Form>
        </section>
    )
}

export default EditCharacter;