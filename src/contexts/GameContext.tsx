import { useEffect, useState, createContext, ReactNode } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGame from "../interfaces/IGame";
import GameService from "../services/GameService";

export const GameContext = createContext<IGameContext | null>(null);

type Props = {
    children: ReactNode
}

const GameProvider = ({children} : Props) => {

    const [games, setGame] = useState<IGame[]>([]);
    
    useEffect(()=>{
        getGamesFromService();
    }, [])

    // GET
    const getGamesFromService = async () => {
        const gamesFromService = await GameService.getAllGames();
        setGame (gamesFromService);
    }

    // DELETE
    const deleteGameById = async (id: number) => {
        await GameService.deleteGame(id);
        const newArray = games.filter ( game => game.id != id )
        setGame(newArray);
    }

    // ADD
    const addNewGame = async (newGame: IGame) => {
        await GameService.postGame(newGame);
    }

    return(
        <GameContext.Provider value={{games, deleteGameById, addNewGame }}>
            {children}
        </GameContext.Provider>
    )

}

export default GameProvider;
