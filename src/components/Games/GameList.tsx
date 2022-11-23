import { useEffect, useState } from "react";
import IGame from "../../interfaces/IGame";
import IGameContext from "../../interfaces/IGameContext";
import GameService from "../../services/GameService";
import GameItem from "./GameItem";

import Row from 'react-bootstrap/Row';

const GameList = () => {
    const [games, setGames] = useState<IGame[]>([]);

    useEffect(()=>{
        getGamesFromService();
    }, [])

    const getGamesFromService = async () => {
        const GamesFromService = await GameService.getAllGames();
        setGames(GamesFromService);
    }
    const getGameList = () => {
        return games.map((game, i) => (
            <GameItem
                key={`game-${i}`}
                id={game.id}
                title={game.title}
                platform={game.platform}
                releaseYear={game.releaseYear}
                price={game.price}
                image={game.image}
                />
        )
        )
    }
    return (
        <section>
            <Row xs={1} sm={2} md={4} lg={4} className="g-2 mt-2">
                {getGameList()}
            </Row>
        </section>
    )
}

export default GameList;