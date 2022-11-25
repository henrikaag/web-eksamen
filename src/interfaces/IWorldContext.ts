import IWorld from "./IWorld";

interface IWorldContext{
    worlds: IWorld[];
    deleteWorldById: (id: number) => void;
    addNewWorld: (newWorld: IWorld) => void;
}

export default IWorldContext;