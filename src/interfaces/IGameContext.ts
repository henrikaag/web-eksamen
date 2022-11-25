import DeleteCharacter from "../components/Characters/DeleteCharacter";
import ICharacter from "./ICharacter";
import IGame from "./IGame";

interface IGameContext{
    games: IGame[];
    characters: ICharacter[];
    deleteGameById: (id: number) => void;
    addNewGame: (newGame: IGame) => void;
    deleteCharacterById: (id: number) => void;
    addNewCharacter: (newCharacter: ICharacter) => void;
}

export default IGameContext;