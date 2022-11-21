import { useContext, useEffect, useState } from "react";
import IGame from "../../interfaces/IGame";
import IGameContext from "../../interfaces/IGameContext";
import GameService from "../../services/GameService";
import GameItem from "./GameItem";

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
            <h2>Game</h2>
            <section>{getGameList()}</section>
        </section>
    )
}

export default GameList;