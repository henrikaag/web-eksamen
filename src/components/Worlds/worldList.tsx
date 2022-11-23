import { useEffect, useState } from "react";
import GameService from "../../services/GameService";
import IWorld from "../../interfaces/IWorld";
import WorldItem from "./WorldItem";

const WorldList = () => {
    const [world, setWorld] = useState<IWorld[]>([]);

    useEffect(()=>{
        getWorldsFromService();
    },[])

    const getWorldsFromService = async () => {
        const WorldsFromService = await GameService.getAllWorlds();
        setWorld(WorldsFromService);
    }

    const getWorldList = () => {
        return world.map((world, i) =>(
            <WorldItem
                key={`id: ${i}`}
                id={world.id}
                name= {world.name}
                game= {world.game}
                image = {world.image}
                />
        ))
    }
    return (
        <section>
            <h1>Worlds</h1>
            {getWorldList()}
        </section>
    )
}

export default WorldList;