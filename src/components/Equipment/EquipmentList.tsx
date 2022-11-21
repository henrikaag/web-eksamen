import { useEffect, useState } from "react";
import GameService from "../../services/GameService";
import IEquipment from "../../interfaces/IEquipment";
import EquipmentItem from "./EquipmentItem";


const EquipmentList = () => {
    const [equipment, setEquipment] = useState<IEquipment[]>([]);

    useEffect(()=>{
        getEquipmentFromService();
    },[])

    const getEquipmentFromService = async () => {
        const EquipmentFromService = await GameService.getAllEquipment();
        setEquipment(EquipmentFromService);
    }

    const getEquipmentList = () => {
        return equipment.map((equipment, i) => (
            <EquipmentItem 
                key={`Id: ${i}`}
                id={ equipment.id}
                nameOfEquipment = {equipment.nameOfEquipment}
                description = {equipment.description}
                usedByCharacter = {equipment.usedByCharacter}
                image = {equipment.image}
            />
        ) )
    }
    return (
        <section>
            <h1>Equipment</h1>
            {getEquipmentList()}
        </section>
    )
}    

export default EquipmentList;