import { useEffect, useState, createContext, ReactNode } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGame from "../interfaces/IGame";
import GameService from "../services/GameService";

export const GameContext = createContext<IGameContext | null>(null);

interface Props{
    children: ReactNode
}

const GameProvider = ({children} : Props) => {

    const [games, setGame] = useState<IGame[]>([]);

    useEffect(()=>{
        getGamesFromService();
    }, [])

    const getGamesFromService = async () => {
        const gamesFromService = await GameService.getAllGames();
        setGame (gamesFromService);
    }

    const deleteGameById = async(id: number) => {
        await GameService.deleteGame(id);
        const newArray = games.filter ( game => game.id != id )
        setGame(newArray);
    }


    /*
    const addGame = (newGame: IGame) => {
        setGame( [newGame, ...game]);
    }
    */

    return(
        <GameContext.Provider value={{games, deleteGameById }}>
            {children}
        </GameContext.Provider>
    )

}

export default GameProvider;