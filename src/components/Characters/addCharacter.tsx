import { ChangeEvent, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CharacterContext } from "../../contexts/CharacterContext";
import { GameContext } from "../../contexts/GameContext";
import ICharacterContext from "../../interfaces/ICharacterContext";
import GameService from "../../services/GameService";

const AddCharacter = () => {
    const [name, setName] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [equipment, setEquipment] = useState<string>("")

    const { addNewCharacter } = useContext(CharacterContext) as ICharacterContext

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch( name ){
            case "name":
                setName( value )
            break;
            case "game":
                setGame( value )
            break;
            case "type":
                setType( value )
            break;
            case "equipment":
                setEquipment ( value )
            break;
        }
    }

    const addCharacter = () => {

        const newCharacter = {
            name: name,
            game: game,
            type: type,
            equipment: equipment
        };
        addNewCharacter(newCharacter)
        console.log(newCharacter);
    }

    return (

        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>name</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="name" value={name}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Game</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="game" value={game} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Type</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="type" value={type} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Equipment</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="equipment" value={equipment} />
            </Form.Group>


            <Button variant="success" onClick={addCharacter}>
                        Finish editing
                    </Button>

        </Form>
    )
}

export default AddCharacter;