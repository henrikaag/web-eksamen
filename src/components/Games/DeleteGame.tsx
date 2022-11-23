import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import { FiTrash2 } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';



const DeleteGame = () => {
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
            <Form>
                <Form.Group className="mb-2"controlId="formGridPassword">
                    <Form.Label>Set id (Wich game do you want to delete?)</Form.Label>
                    <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                </Form.Group>

                <h3 onChange={changeHandler}>{title}</h3>

                <Button variant="warning" onClick={getGameFromService} className="me-2">
                        Get game
                </Button>

                <Button variant="danger">
                        Delete game
                </Button>
            </Form>
        </>
    )
}

export default DeleteGame;