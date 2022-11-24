import { useEffect, useState } from "react";
import GameService from "../../services/GameService";
import IEquipment from "../../interfaces/IEquipment";
import EquipmentItem from "./EquipmentItem";

import Row from 'react-bootstrap/Row';


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
            <Row xs={1} sm={2} md={3} lg={4} className="g-2 mt-2">
                {getEquipmentList()}
            </Row>
        </section>
    )
}

export default EquipmentList;