import DeleteCharacter from "../components/Characters/DeleteCharacter";
import ICharacter from "./ICharacter";
import IEquipment from "./IEquipment";
import IGame from "./IGame";
import IWorld from "./IWorld";

interface IGameContext{
    games: IGame[];
    characters: ICharacter[];
    // equipment: IEquipment[];
    // worlds: IWorld[];

    deleteGameById: (id: number) => void;
    addNewGame: (newGame: IGame) => void;
    deleteCharacterById: (id: number) => void;
    addNewCharacter: (newCharacter: ICharacter) => void;
    // deleteEquipmentById: (id: number) => void;
    // addNewEquipment: (newEquipment: IEquipment) => void;
    // deleteWorldById: (id: number) => void;
    // addNewWorld: (newWorld: IWorld) => void;
}

export default IGameContext;