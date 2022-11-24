import { ChangeEvent, useContext, useState } from "react";
import GameService from "../../services/GameService";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import { FiTrash2 } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";



const DeleteGame = () => {
    const [id, setId] = useState<number>(0)
    const {deleteGameById} = useContext(GameContext) as IGameContext


 
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setId( parseInt(e.currentTarget.value) );
    }

    const deleteGame = () => {
        deleteGameById( id )
    }
    return (
        <>
            <Form>
                <Form.Group className="mb-2"controlId="formGridPassword">
                    <Form.Label>Set id (Wich game do you want to delete?)</Form.Label>
                    <Form.Control name="id" onChange={changeHandler} type="text" value={id} />
                </Form.Group>

                

                <Button variant="warning" onClick={deleteGame} className="me-2">
                        Get game
                </Button>

                <Button variant="danger">
                        Delete game
                </Button>
            </Form>
        </>
    )
}

export default DeleteGame;