import { useContext, useEffect, useState } from "react";
import GameService from "../../services/GameService";
import ICharacter from "../../interfaces/ICharacter";
import CharacterItem from "./CharacterItem";

import Row from 'react-bootstrap/Row';

const CharacterList = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(()=>{
        getCharactersFromService();
    }, [])

    const getCharactersFromService = async () => {
        const CharactersFromService = await GameService.getAllCharacters();
        setCharacters(CharactersFromService);
    }
    const getCharacterList = () => {
        return characters.map((character, i) => (
            <CharacterItem
                key={`character-${i}`}
                id={character.id}
                name={character.name}
                game={character.game}
                type={character.type}
                equipment={character.equipment}
                image= {character.image}
                />
        )
        )
    }
    return (
        <section>
            <h2>Character</h2>
            <Row xs={1} sm={2} md={3} className="g-2 mt-2">
                {getCharacterList()}
            </Row>
        </section>
    )
}

export default CharacterList;