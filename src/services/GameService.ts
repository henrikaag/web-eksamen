import axios from "axios";
import IGame from "../interfaces/IGame";
import Spinner from 'react-bootstrap/Spinner';



const GameService = (
    () => {
        const ElectricGamesEndpoints = {
            game: "https://localhost:7050/game",
            character: "https://localhost:7050/character",
            worlds: "https://localhost:7050/world",
            equipment: "https://localhost:7050/equipment",
        }

        const getAllGames = async () => {
            const result = await axios.get(ElectricGamesEndpoints.game);
            return result.data;
        }
        const getAllCharacters = async () => {
            const result = await axios.get(ElectricGamesEndpoints.character)
            return result.data;
        }
        const getAllEquipment = async () => {
            const result = await axios.get(ElectricGamesEndpoints.equipment)
            return result.data;
        }
        const getAllWorlds = async () => {
            const result = await axios.get(ElectricGamesEndpoints.worlds);
            return result.data;

        }
        const getGameById = async (id: number) => {
            const result = await axios.get(`${ElectricGamesEndpoints}/${id}`);
            return result.data;
        }
        const putGame = async (editedGame: IGame) => {
            const result = await axios.put(ElectricGamesEndpoints.game, editedGame);
            return result.data;
        }

        return {
            getAllGames,
            getAllCharacters,
            getAllEquipment,
            getAllWorlds,
            getGameById,
            putGame
        }
    }
)();

export default GameService;