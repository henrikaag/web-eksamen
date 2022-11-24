import { ChangeEvent, useContext, useState } from "react";
import GameService from "../../services/GameService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const DeleteGame = () => {
    const [id, setId] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [platform, setPlatform] = useState<string>("")
    const [releaseYear, setReleaseYear] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [image, setImage] = useState<string>("")

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
    const deleteGame = () => {
        const editedGame = {
            id: parseInt(id),
            title: title,
            platform: platform,
            releaseYear: parseInt(releaseYear),
            price: parseInt(price),
            image: image
        };
        GameService.putGame(editedGame);

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

                <Button variant="danger mb-2">
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