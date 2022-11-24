import IGame from "./IGame";

interface IGameContext{
    games: IGame[];
    deleteGameById: (id: number) => void;
    addNewGame: (newGame: IGame) => void;
}

export default IGameContext;