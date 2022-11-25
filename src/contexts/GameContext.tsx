import { useEffect, useState, createContext, ReactNode } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGame from "../interfaces/IGame";
import GameService from "../services/GameService";
import ICharacterContext from "../interfaces/ICharacterContext";
import ICharacter from "../interfaces/ICharacter";

export const GameContext = createContext<IGameContext | null>(null);

export const CharacterContext = createContext<ICharacterContext | null>(null);


type Props = {
    children: ReactNode
}

const GameProvider = ({children} : Props) => {

    const [games, setGame] = useState<IGame[]>([]);
    
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(()=>{
        getGamesFromService();
        getCharactersFromService();
    }, [])

    const getGamesFromService = async () => {
        const gamesFromService = await GameService.getAllGames();
        setGame (gamesFromService);
    }

    const deleteGameById = async (id: number) => {
        await GameService.deleteGame(id);
        const newArray = games.filter ( game => game.id != id )
        setGame(newArray);
    }

    const addNewGame = async (newGame: IGame) => {
        await GameService.postGame(newGame);
    }

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
        <GameContext.Provider value={{games, characters, deleteCharactersById, addNewCharacter, deleteGameById, addNewGame }}>
            {children}
        </GameContext.Provider>
    )

}

export default GameProvider;
