import { ChangeEvent, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { WorldContext } from '../../contexts/WorldContext';
import IWorldContext from '../../interfaces/IWorldContext';
import ImageUploadService from '../../services/ImageUploadService';

const AddWorld = () => {

    const [name, setName] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [nameOfImage, setNameOfImage] = useState<string>("")
    const [image, setImage] = useState<File | null>(null)

    const { addNewWorld } = useContext(WorldContext) as IWorldContext

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch( name ) {
            case "name":
                setName( value )
            break;
            case "game":
                setGame( value )
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
        if( image != null){
            ImageUploadService.uploadImage(image);
        }
    }

    // ADD
    const addWorld = () => {
        const newWorld = {
            name: name,
            game: game,
            image: nameOfImage
        };
        addNewWorld(newWorld)
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

            <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name='image' onChange={imageHandler} />
                        <Button className="mt-2" variant="warning" onClick={uploadImage}>
                        Upload Image
                        </Button>
                        <br></br>
                        <i>*Upload the image before submitting</i>
            </Form.Group>

            <Button variant="success" onClick={addWorld}>
                        Add World!
                    </Button>

        </Form>

    )
}

export default AddWorld;