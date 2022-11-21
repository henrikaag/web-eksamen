import axios from "axios";
import ICartoon from "../interfaces/IGame";

const GameService = (
    () => {
        const ElectricGamesEndpoints = "https://localhost:7050/game";

        const getAllGames = async () => {
            const result = await axios.get(ElectricGamesEndpoints);
            return result.data;
        }

        return {
            getAllGames
        }
    }
)();

export default GameService;