import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { GameContext } from '../../contexts/GameContext';
import IGameContext from '../../interfaces/IGameContext';
import GameService from '../../services/GameService';

const AddGame = () => {
    const { addNewGame } = useContext(GameContext) as IGameContext

    // const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [platform, setPlatform] = useState<string>("")
    const [releaseYear, setReleaseYear] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)


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

    const addAGame = () => {

        const newGame = {
            // id: id,
            title: title,
            platform: platform,
            releaseYear: releaseYear,
            price: price
        };
        addNewGame(newGame)
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
                        <Form.Control type="text" />
            </Form.Group>

            <Button variant="success" onClick={addAGame}>
                        Finish editing
                    </Button>

        </Form>

    )
}

export default AddGame