
import IEquipment from "./IEquipment";

interface IEquipmentContext{
    equipment: IEquipment[];

    deleteEquipmentById: (id: number) => void;
    addNewEquipment: (newEquipment: IEquipment) => void;
}

export default IEquipmentContext;