import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import { FiTrash2 } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';

import '../../css/EditGame.css';

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
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Edit Game <BsPencilSquare /></Accordion.Header>
                <Accordion.Body className="edit-game-accordion">
                <Form>
                    <Form.Group className="mb-2"controlId="formGridPassword">
                        <Form.Label>Set id (Wich game do you want to edit?)</Form.Label>
                        <Form.Control type="number" placeholder="id" />
                    </Form.Group>

                    <Form.Group className="mb-2"controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="email" placeholder="Title" />
                    </Form.Group>

                    <Form.Group className="mb-2"controlId="formGridPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridAddress1">
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control placeholder="Release Year" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridState">
                        <Form.Label>Platform</Form.Label>
                        <Form.Select placeholder="Choose...">
                            <option>PC</option>
                            <option>Playstation</option>
                            <option>Xbox</option>
                            <option>Nintendo Switch</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Finish editing
                    </Button>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Delete Game <FiTrash2 /></Accordion.Header>
                <Accordion.Body className="delete-game-accordion">

                    <Form.Group className="mb-2"controlId="formGridPassword">
                        <Form.Label>Set id (Wich game do you want to edit?)</Form.Label>
                        <Form.Control type="number" placeholder="id" />
                    </Form.Group>

                    <Button variant="danger" type="submit">
                            Delete game
                    </Button>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>


            <h2>Rediger Tegnefilm</h2>
            <div>
                <label>Id</label>
                <input name="id" onChange={changeHandler} type="text" value={id}/>
                <button onClick={getGameFromService}>Hent Tegnefilm</button>
            </div>
            <div>
                <label>Tittel</label>
                <input name="title" onChange={changeHandler} type="text" value={title}/>
            </div>
            <div>
                <label>Platform</label>
                <input name="platform" onChange={changeHandler} type="text" value={platform}/>
            </div>
            <div>
                <label>Release Year</label>
                <input name="releaseYear" onChange={changeHandler} type="text" value={releaseYear}/>
            </div>
            <div>
                <label>Price</label>
                <input name="price" onChange={changeHandler} type="text" value={price}/>
            </div>
            <div>
                <label>Image</label>
                <input name="image" onChange={changeHandler} type="text" value={image}/>
            </div>
            <button onClick={editGame}>Lagre endringer</button>
        </section>
        </>
    )
}

export default EditGame;