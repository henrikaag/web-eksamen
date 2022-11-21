import IWorld from "../../interfaces/IWorld"

const WorldItem = ({id, name, game, image} : IWorld) => {
    return (
        <article>
            <h5>{name}</h5>
        </article>
    )

}

export default WorldItem;