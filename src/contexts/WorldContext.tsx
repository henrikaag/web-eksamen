import { useEffect, useState, createContext, ReactNode } from "react";
import IGameContext from "../interfaces/IGameContext";
import IGame from "../interfaces/IGame";
import GameService from "../services/GameService";
import IWorldContext from "../interfaces/IWorldContext";
import IWorld from "../interfaces/IWorld";

export const WorldContext = createContext<IWorldContext | null>(null)

type Props = {
    children: ReactNode
}

const WorldProvider = ({children} : Props) => {
    const [worlds, setWorlds] = useState<IWorld[]>([]);


    useEffect(() => {
        getWorldsFromService();
    }, [])

    const getWorldsFromService = async () => {
        const WorldsFromService = await GameService.getAllWorlds();
        setWorlds(WorldsFromService)
    }

    const deleteWorldById = async (id: number) => {
        await GameService.deleteWorld(id);
        const newArray = worlds.filter ( world => world.id != id )
        setWorlds(newArray);
    }

    const addNewWorld = async (newWorld : IWorld) => {
        await GameService.postWorld(newWorld)
    }

    return (
        <WorldContext.Provider value = {{worlds, deleteWorldById, addNewWorld}}>
            {children}
        </WorldContext.Provider>
    )
}

export default WorldProvider;