import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import GameService from "../../services/GameService";

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
        <>
        <section>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Set id (Wich equipment do you want to edit?)</Form.Label>
                        <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                        <Button variant="warning" onClick={getEquipmentFromService} className="mt-2">
                            Get equipment
                    </Button>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="nameOfEquipment" onChange={changeHandler} type="text" value={nameOfEquipment} />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>What character uses this</Form.Label>
                        <Form.Control name="usedByCharacter" onChange={changeHandler} type="text" value={usedByCharacter}/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>description</Form.Label>
                        <Form.Control name="description" onChange={changeHandler} type="text" value={description}/>
                    </Form.Group>

                    <Button variant="success" onClick={editEquipment}>
                        Finish editing
                    </Button>
                    </Form>
        </section>
        </>
    )
}

export default EditEquipment;