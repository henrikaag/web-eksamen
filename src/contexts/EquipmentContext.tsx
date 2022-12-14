import { useEffect, useState, createContext, ReactNode } from "react";
import GameService from "../services/GameService";
import IEquipment from "../interfaces/IEquipment";
import IEquipmentContext from "../interfaces/IEquipmentContext";

export const EquipmentContext = createContext<IEquipmentContext | null>(null)

type Props = {
    children: ReactNode
}

const EquipmentProvider = ({children} : Props) => {
    
    const [equipment, setEquipment] = useState<IEquipment[]>([]);

    useEffect(()=> {
        getEquipmentFromService();
    }, [])

    // GET
    const getEquipmentFromService = async () => {
        const equipmentFromService = await GameService.getAllEquipment();
        setEquipment (equipmentFromService);
    }

    // DELETE
    const deleteEquipmentById = async (id: number) => {
        await GameService.deleteEquipment(id);
        const newArray = equipment.filter ( equipment => equipment.id != id)
        setEquipment(newArray);
    }

    // ADD
    const addNewEquipment = async (newEquipment: IEquipment) => {
        await GameService.postEquipment(newEquipment);
    }

    return(
        <EquipmentContext.Provider value={{equipment, deleteEquipmentById, addNewEquipment }}>
            {children}
        </EquipmentContext.Provider>
    )
}

export default EquipmentProvider;