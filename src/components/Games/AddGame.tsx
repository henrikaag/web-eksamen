import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import GameService from '../../services/GameService';

const AddGame = () => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [platform, setPlatform] = useState<string>("")
    const [releaseYear, setReleaseYear] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)
    const [image, setImage] = useState<string>("")

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget

        switch( name ){
            case "id":
                setId ( parseInt(value));
            break;
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
            case "image":
                setImage( value );
            break;
        }
    }

    const addGame = () => {

        const newGame = {
            id: id,
            title: title,
            platform: platform,
            releaseYear: releaseYear,
            price: price,
            image: image
        };
        GameService.postGame(newGame);
        console.log(newGame);
    }

    return (

        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={changeHandler} type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Platform</Form.Label>
                <Form.Control onChange={changeHandler} type="text" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Release Year</Form.Label>
                <Form.Control onChange={changeHandler} type="text" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control onChange={changeHandler} type="text" placeholder="Password" />
            </Form.Group>


            <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" />
            </Form.Group>

            <Button variant="success" onClick={addGame}>
                        Finish editing
                    </Button>

        </Form>

    )
}

export default AddGame