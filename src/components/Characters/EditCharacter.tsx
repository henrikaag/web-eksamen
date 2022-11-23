import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

const EditCharacter = () => {
    const [id, setId] = useState<string>("id not set")
    const [name, setName] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [equipment, setEquipment] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const getCharacterFromService = async () => {
        const character = await GameService.getCharacterById(parseInt(id));
        setName(character.name);
        setGame(character.game);
        setType(character.type);
        setEquipment(character.equipment);
        setImage(character.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch ( name ){
            case "id":
                setId( value );
            break;
            case "name":
                setName ( value );
            break;
            case "game":
            setGame ( value );
            break;
            case "type":
                setType( value );
            break;
            case "equipment":
                setEquipment( value );
            break;
            case "image":
                setImage( value );
            break;
        }
    }

    const editCharacter = () => {
        const editedCharacter = {
            id: parseInt(id),
            name: name,
            game: game,
            type: type,
            equipment: equipment,
            image: image
        };
        GameService.putCharacter( editedCharacter );
    }

    return (
        <section>
            <h2>Rediger Character</h2>
            <div>
                <label>Id</label>
                <input name="id" onChange={changeHandler} type="text" value={id}/>
                <button onClick={getCharacterFromService}>Hent Character</button>
            </div>
            <div>
                <label>name</label>
                <input name="name" onChange={changeHandler} type="text" value={name}/>
            </div>
            <div>
                <label>game</label>
                <input name="game" onChange={changeHandler} type="text" value={game}/>
            </div>
            <div>
                <label>Type</label>
                <input name="type" onChange={changeHandler} type="text" value={type}/>
            </div>
            <div>
                <label>equipment</label>
                <input name="equipment" onChange={changeHandler} type="text" value={equipment}/>
            </div>
            <div>
                <label>image</label>
                <input name="image" onChange={changeHandler} type="text" value={image}/>
            </div>
            <button onClick={editCharacter}>Lagre endringer</button>
        </section>
    )
}

export default EditCharacter;