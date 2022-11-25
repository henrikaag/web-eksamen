import ICharacter from "./ICharacter";

interface ICharacterContext{
    characters: ICharacter[];
    
    deleteCharactersById: (id: number) => void;
    addNewCharacter: ( newCharacter: ICharacter) => void;
}

export default ICharacterContext;