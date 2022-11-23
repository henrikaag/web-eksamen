import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import GameList from './GameList';


import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';
import EditGame from "./EditGame";


const Games = () => {

    return (
        <>
        <section className="container mt-4">
            <h1>Welcome to ElectricGames!</h1>

            <Button variant="warning m-1">PC <MdComputer /></Button>
            <Button variant="primary m-1">Playstation <FaPlaystation /></Button>
            <Button variant="success m-1">Xbox <FaXbox /></Button>
            <Button variant="danger m-1">Nintendo <SiNintendoswitch /></Button>
            <p className="m-1">Filter games by platform</p>
            <br></br>

            {/*EDIT BUTTON*/}
            <EditGame />

            <GameList />
            <br></br>
            </section>
              </>
    )
}

export default Games;