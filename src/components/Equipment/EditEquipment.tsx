import { ChangeEvent, useState } from "react";
import GameService from "../../services/GameService";

const EditEquipment = () => {
    const [id, setId] = useState<string>("")
    const [nameOfEquipment, setName] = useState<string>("")
    const [description, setDesc] = useState<string>("")
    const [image, setImage] = useState<string>("")

    const getEquipmentFromService = async () => {
        const equipment = await GameService.getEquipmentById(parseInt(id));
        setName(equipment.nameOfEquipment);
        setDesc(equipment.description);
        setImage(equipment.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch( name ){
            case "id":
                setId( value );
            break;
            case "nameOfEquipment":
                setName( value );
            break;
            case "description":
                setDesc( value );
            break;
            case "image":
                setImage( value );
            break;
        }
    }

    const editEquipment =() => {
        const editedEquipment = {
            id: parseInt(id),
            nameOfEquipment: nameOfEquipment,
            description: description,
            image: image
        };
        GameService.putEquipment
    }

    return (
        <section>
            <h2>Rediger equipment</h2>
            <div>
                <label>Id</label>
                <input name="id" onChange={changeHandler} type="text" value={id}/>
                <button onClick={getEquipmentFromService}>Hent Tegnefilm</button>
            </div>
            <div>
                <label>Name</label>
                <input name="name" onChange={changeHandler} type="text" value={nameOfEquipment}/>
            </div>
            <div>
                <label>description</label>
                <input name="description" onChange={changeHandler} type="text" value={description}/>
            </div>
            <div>
                <label>Image</label>
                <input name="image" onChange={changeHandler} type="text" value={image}/>
            </div>
            <button onClick={editEquipment}>Lagre endringer</button>
        </section>
    )
}

export default EditEquipment;