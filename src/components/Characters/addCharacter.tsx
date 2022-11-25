import { ChangeEvent, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CharacterContext } from "../../contexts/CharacterContext";
import ICharacterContext from "../../interfaces/ICharacterContext";
import ImageUploadService from "../../services/ImageUploadService";

const AddCharacter = () => {
    const [name, setName] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [equipment, setEquipment] = useState<string>("")
    const [nameOfImage, setNameOfImage] = useState<string>("")
    const [image, setImage] = useState<File | null>(null)

    const { addNewCharacter } = useContext(CharacterContext) as ICharacterContext;

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

    // POST FOR IMAGE
    const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {files} =e.target;

        if(files !=null) {
            const file= files[0]
            setImage(file)
            setNameOfImage(file.name)
        }
    }

    const uploadImage = () => {
        if( image!= null ){
            ImageUploadService.uploadImage(image);
        }
    }

    // ADD
    const addCharacter = () => {

        const newCharacter = {
            name: name,
            game: game,
            type: type,
            equipment: equipment,
            image: nameOfImage
        };
        addNewCharacter(newCharacter)
        console.log(newCharacter);
    }

    return (

        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
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

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={imageHandler} type="file" name="image"/>
                <Button className="mt-2" variant="warning" onClick={uploadImage}>
                        Upload Image
                </Button>
                <br></br>
                <i>*Upload the image before submitting</i>
            </Form.Group>


            <Button variant="success" onClick={addCharacter}>
                        Add Character!
            </Button>

        </Form>
    )
}

export default AddCharacter;