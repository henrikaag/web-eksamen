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

    const EditEquipment =() => {
        const editedEquipment = {
            id: parseInt(id),
            nameOfEquipment: nameOfEquipment,
            description: description,
            image: image
        };
        GameService.putEquipment
    }
}

export default EditEquipment;