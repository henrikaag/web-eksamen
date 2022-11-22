import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

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
        <section>
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
    )
}

export default EditGame;