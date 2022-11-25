import { useEffect, useState, createContext, ReactNode } from "react";
import ICharacterContext from "../interfaces/ICharacterContext";
import ICharacter from "../interfaces/ICharacter";
import GameService from "../services/GameService";

export const CharacterContext = createContext<ICharacterContext | null>(null)

type Props = {
    children: ReactNode
}

const CharacterProvider = ({children} : Props) => {

    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(()=> {
        getCharactersFromService();
    }, [])

    const getCharactersFromService = async () => {
        const charactersFromService = await GameService.getAllCharacters();
        setCharacters (charactersFromService);
    }

    const deleteCharactersById = async (id: number) => {
        await GameService.deleteCharacter(id)
        const newArray = characters.filter ( character => character.id != id)
        setCharacters(newArray);
    }

    const addNewCharacter = async (newCharacter: ICharacter) => {
        await GameService.postCharacter(newCharacter)
    }

    return(
        <CharacterContext.Provider value={{characters, deleteCharactersById, addNewCharacter}}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider;