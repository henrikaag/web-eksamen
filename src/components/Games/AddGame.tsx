import { ChangeEvent, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { GameContext } from '../../contexts/GameContext';
import IGameContext from '../../interfaces/IGameContext';
import ImageUploadService from '../../services/ImageUploadService';

const AddGame = () => {

    const [title, setTitle] = useState<string>("")
    const [platform, setPlatform] = useState<string>("")
    const [releaseYear, setReleaseYear] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)
    const [nameOfImage, setNameOfImage] = useState<string>("")
    const [image, setImage] = useState<File | null>(null)

    const { addNewGame } = useContext(GameContext) as IGameContext

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch( name ){
            case "title":
                setTitle( value );
            break;
            case "platform":
                setPlatform( value );
            break;
            case "releaseYear":
                setReleaseYear( parseInt(value));
            break;
            case "price":
                setPrice(parseInt(value));
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

    const addAGame = () => {

        const newGame = {
            // id: id,
            title: title,
            platform: platform,
            releaseYear: releaseYear,
            price: price,
            image: nameOfImage
        };
        addNewGame(newGame)
        console.log(newGame);
    }


    return (

        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="title" value={title}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Platform</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="platform" value={platform} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Release Year</Form.Label>
                <Form.Control onChange={changeHandler} type="number" name="releaseYear" value={releaseYear} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={changeHandler} type="number" name="price" value={price} />
            </Form.Group>


            <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name='image' onChange={imageHandler} />
                        <Button className="mt-2" variant="warning" onClick={uploadImage}>
                        Upload Image
                </Button>
                <br></br>
                <i>*Upload the image before submitting</i>
            </Form.Group>

            <Button variant="success" onClick={addAGame}>
                        Add game!
                    </Button>

        </Form>

    )
}

export default AddGame