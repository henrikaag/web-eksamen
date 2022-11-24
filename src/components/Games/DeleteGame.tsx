import { ChangeEvent, useContext, useState } from "react";
import GameService from "../../services/GameService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";



const DeleteGame = () => {
    const [id, setId] = useState<number>(0)
    const { deleteGameById } = useContext(GameContext) as IGameContext;
    const [title, setTitle] = useState<string>("")
    const [platform, setPlatform] = useState<string>("")
    const [releaseYear, setReleaseYear] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const getGameFromService = async () => {
        const game = await GameService.getGameById( id );
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
                setId ( parseInt(e.currentTarget.value) );
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId (parseInt(e.currentTarget.value))
    }

    const deleteGame = () => {
        deleteGameById( id );
        
    }

    return (
        <>
        <section>
            <Form>
                <Form.Group className="mb-2"controlId="formGridPassword">
                    <Form.Label>Set id (Wich game do you want to delete?)</Form.Label>
                    <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                </Form.Group>

                <h3 onChange={changeHandler}>{title}</h3>

                <Button variant="warning" onClick={getGameFromService} className="me-2">
                        Get game
                </Button>

                <Button variant="danger mb-2"  onClick={deleteGame}>
                        Delete game
                </Button>
            </Form>
            <i>A preview of the world you want to delete will show up below when you have entered an id and clicked "Get World"</i>
            <Col>
                    <Card className="shadow-sm">
                        <Card.Img variant="top" src={`https://localhost:7050/images/${image}`} style={{ width: "100%", height: "300px" }} className="game-card-image"/>
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>Platform: {platform}</p>
                            <p>Release Year: {releaseYear}</p>
                            <p>{price}$</p>
                            <Badge pill bg="primary">ID: {id}</Badge>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </section>
        </>
    )
}

export default DeleteGame;