import IGame from "../../interfaces/IGame";
import { FC } from "react";

const GameItem = ({id, title, platform, releaseYear, price, image } : IGame) => {
    return (
        <article>
            <h5>{title}</h5>
        </article>
    )
}

export default GameItem;