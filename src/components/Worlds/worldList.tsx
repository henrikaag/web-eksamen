import { useEffect, useState } from "react";
import GameService from "../../services/GameService";
import IWorld from "../../interfaces/IWorld";
import WorldItem from "./WorldItem";

import Row from 'react-bootstrap/Row';

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
            <Row xs={1} sm={2} md={3} lg={4} className="g-2 mt-2">
                {getWorldList()}
            </Row>
        </section>
    )
}

export default WorldList;