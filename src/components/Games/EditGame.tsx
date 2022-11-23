import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditGame = () => {
    const [id, setId] = useState<string>("Id not set")
    const [title, setTitle] = useState<string>("Title not set")
    const [platform, setPlatform] = useState<string>("Platform not set")
    const [releaseYear, setReleaseYear] = useState<string>("Release year not set")
    const [price, setPrice] = useState<string>("Price not set")
    const [image, setImage] = useState<string>("image not set")

    const getGameFromService = async () => {
        const game = await GameService.getGameById(parseInt(id))
        setTitle(game.title);
        setPlatform(game.platform);
        setReleaseYear(game.releaseYear);
        setPrice(game.price);
        setImage(game.image);
    }
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget

        switch( name ){
            case "id":
                setId ( value );
            break;
            case "title":
                setTitle( value );
            break;
            case "platform":
                setPlatform( value );
            break;
            case "releaseYear":
                setReleaseYear( value );
            break;
            case "price":
                setPrice( value );
            break;
            case "image":
                setImage( value );
            break;
        }
    }
    const editGame = () => {
        const editedGame = {
            id: parseInt(id),
            title: title,
            platform: platform,
            releaseYear: parseInt(releaseYear),
            price: parseInt(price),
            image: image
        };
        GameService.putGame(editedGame);
    }
    return (
        <>
        <section>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Set id (Wich game do you want to edit?)</Form.Label>
                        <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                        <Button variant="warning" onClick={getGameFromService} className="mt-2">
                            Get game
                    </Button>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" onChange={changeHandler} type="text" value={title} />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" onChange={changeHandler} type="text" value={price}/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control name="releaseYear" onChange={changeHandler} type="text" value={releaseYear}/>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Platform</Form.Label>
                        <Form.Control name="platform" onChange={changeHandler} type="text" value={platform}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Button variant="success" onClick={editGame}>
                        Finish editing
                    </Button>
                    </Form>
        </section>
        </>
    )
}

export default EditGame;