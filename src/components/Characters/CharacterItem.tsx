import ICharacter from "../../interfaces/ICharacter";

const CharacterItem = ({id, name, game, type, equipment, image } : ICharacter) => {
    return (
        <article>
            <h5>{name}</h5>
        </article>
    )
}

export default CharacterItem;