import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

const EditWorld = () => {

    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [game, setGame] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const getWorldFromService = async () => {
        const world = await GameService.getWorldById(parseInt(id));
        setName(world.name);
        setGame(world.game);
        setImage(world.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;

        switch( name ){
            case "id":
                setId( value );
            break;
            case "name": 
                setName( value );
            break;
            case "game":
                setGame( value );
            break; 
            case "image":
                setImage( value );
            break;
        }
    }

    const editWorld = () => {
        const editedWorld = {
            id: parseInt(id),
            name: name,
            game: game,
            image: image
        };
        GameService.putWorld ( editedWorld )
    }

    return (
        <section>
            <h2>Rediger world</h2>
            <div>
                <label>Id</label>
                <input name="id" onChange={changeHandler} type="text" value={id}/>
                <button onClick={getWorldFromService}>Hent world</button>
            </div>
            <div>
                <label>Name</label>
                <input name="name" onChange={changeHandler} type="text" value={name}/>
            </div>
            <div>
                <label>Game</label>
                <input name="game" onChange={changeHandler} type="text" value={game}/>
            </div>
            <div>
                <label>Image</label>
                <input name="image" onChange={changeHandler} type="text" value={image}/>
            </div>
            <button onClick={editWorld}>Lagre endringer</button>
        </section>
    )
}

export default EditWorld