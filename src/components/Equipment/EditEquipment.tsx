import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditEquipment = () => {
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

    const editEquipment =() => {
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
        <section>
            <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Set id (Wich game do you want to edit?)</Form.Label>
                        <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                        <Button variant="warning" onClick={getEquipmentFromService} className="mt-2">
                            Get Character
                    </Button>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={changeHandler} type="text" value={nameOfEquipment} />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Used by Character</Form.Label>
                        <Form.Control name="game" onChange={changeHandler} type="text" value={usedByCharacter}/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="type" onChange={changeHandler} type="text" value={description}/>
                    </Form.Group>
                    <Button variant="success" onClick={editEquipment}>
                        Finish editing
                    </Button>
                    </Form>
        </section>
    )
}

export default EditEquipment;