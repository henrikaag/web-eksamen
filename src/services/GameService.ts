import axios from "axios";
import { STATUS_CODES } from "http";
import ICharacter from "../interfaces/ICharacter";
import IEquipment from "../interfaces/IEquipment";
import IGame from "../interfaces/IGame";
import IWorld from "../interfaces/IWorld";


const GameService = (
    () => {
        const ElectricGamesEndpoints = {
            game: "https://localhost:7050/game",
            character: "https://localhost:7050/character",
            worlds: "https://localhost:7050/world",
            equipment: "https://localhost:7050/equipment",
        }

        // GET ALL - Funksjoner
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

        // GET BY ID - Funksjoner
        const getGameById = async (id: number) => {
            const result = await axios.get(`${ElectricGamesEndpoints.game}/${id}`);
            return result.data;
        }

        const getCharacterById = async (id: number) => {
            const result = await axios.get(`${ElectricGamesEndpoints.character}/${id}`);
            return result.data;
        }

        const getEquipmentById = async (id: number) => {
            const result = await axios.get(`${ElectricGamesEndpoints.equipment}/${id}`);
            return result.data;
        }

        const getWorldById = async (id: number) => {
            const result = await axios.get(`${ElectricGamesEndpoints.worlds}/${id}`);
            return result.data
        }
        // PUT - Funksjoner
        const putGame = async (editedGame: IGame) => {
            const result = await axios.put(ElectricGamesEndpoints.game, editedGame);
            return result.data;
        }
        const putCharacter = async (editedCharacter: ICharacter) => {
            const result = await axios.put(ElectricGamesEndpoints.character, editedCharacter);
            return result.data
        }

        const putEquipment = async (editedEquipment: IEquipment) => {
            const result = await axios.put(ElectricGamesEndpoints.equipment, editedEquipment);
            return result.data;
        }

        const putWorld = async (editedWorld: IWorld) => {
            const result = await axios.put(ElectricGamesEndpoints.worlds, editedWorld);
            return result.data;
        }

        // POST - Funksjoner

        const postGame = async (newGame: IGame) => {
            try
            {
            
            const result = await axios.post(ElectricGamesEndpoints.game, newGame);
            console.log(result);
            return result.data;
            }
            catch
            {
                return 500;
            }
        }

        const deleteGame = async (id: number) => {
            const result = await axios.delete(`${ElectricGamesEndpoints.game}/${id}`)
            console.log(result);
            return result;
        }

        return {
            getAllGames,
            getAllCharacters,
            getAllEquipment,
            getAllWorlds,
            getGameById,
            getCharacterById,
            getEquipmentById,
            getWorldById,
            putGame,
            putCharacter,
            putEquipment,
            putWorld,
            postGame,
            deleteGame
        }
    }
)();

export default GameService;