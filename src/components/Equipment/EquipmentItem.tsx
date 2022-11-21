import IEquipment from "../../interfaces/IEquipment";

const EquipmentItem = ({id, nameOfEquipment, usedByCharacter, image} : IEquipment) => {
    return (
        <article>
            <h5>{nameOfEquipment}</h5>
        </article>
    )
}

export default EquipmentItem;