import { ErrorResponse } from "@remix-run/router";
import axios from "axios";
import ICharacter from "../interfaces/ICharacter";
import IEquipment from "../interfaces/IEquipment";
import IGame from "../interfaces/IGame";
import IWorld from "../interfaces/IWorld";
import { AxiosError } from "axios";


const GameService = (
    () => {
        const ElectricGamesEndpoints = {
            game: "https://localhost:7050/game",
            character: "https://localhost:7050/character",
            worlds: "https://localhost:7050/world",
            equipment: "https://localhost:7050/equipment",
            imageUpload: "http://localhost:7050/UploadImage"
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

        // GET BY STRING - Funksjoner

        const getGameByTitle = async (title: string) => {
            const result = await axios.get(`${ElectricGamesEndpoints.game}/${title}`)
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
            return result.data;
            }
            catch(error: AxiosError | any)
            { 
                if(axios.isAxiosError(error) && ErrorResponse){
                    console.log(error.response)
                }
                
            }
        }

        const postCharacter = async (newCharacter: ICharacter) => {
            try
            {
            
            const result = await axios.post(ElectricGamesEndpoints.character, newCharacter);
            console.log(result)
            return result.data;
            }
            catch(error: AxiosError | any)
            { 
                if(axios.isAxiosError(error) && ErrorResponse){
                    console.log(error.response)
                }
                
            }
        }

        const uploadImage = async (image: File) => {
            const formData = new FormData();
            formData.append("file", image);

            const result = await axios({
                url: ElectricGamesEndpoints.imageUpload,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });

            formData.delete("file");
            console.log(result)            
            return result.data;
        }

        const deleteGame = async (id: number) => {
            const result = await axios.delete(`${ElectricGamesEndpoints.game}/${id}`)
            return result;
        }

        const deleteCharacter = async (id: number) => {
            const result = await axios.delete(`${ElectricGamesEndpoints.character}/${id}`)
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
            deleteGame,
            getGameByTitle,
            uploadImage,
            deleteCharacter,
            postCharacter
        }
    }
)();

export default GameService;