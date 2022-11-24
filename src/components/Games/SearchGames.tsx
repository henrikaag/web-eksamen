import { SetStateAction, useState } from "react";
import Form from 'react-bootstrap/Form';
import GameService from "../../services/GameService";
import Games from "./Games";
import GameList from "./GameList";
import IGame from "../../interfaces/IGame";
import GameItem from "./GameItem";





const SearchGames = () => {

    const [searchInput, setSearchInput] = useState("");

    const searchItems = (searchInput: SetStateAction<string>) => {
        setSearchInput(searchInput)
        console.log(searchInput);
    }

    return (
        <Form>
        <Form.Group className="mb-5">
            <Form.Control type="text" placeholder="Search for game title" onChange={(e) => searchItems(e.target.value)} />
        </Form.Group>
        </Form>
    )
}

export default SearchGames;


