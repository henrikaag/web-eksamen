import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import GameList from './GameList';

import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';

const Games = () => {
    return (
        <>
        <section className="container">
            <h1>Games</h1>

            <h3>Filter by platform</h3>
            <Button variant="warning m-1">PC <MdComputer /></Button>
            <Button variant="primary m-1">Playstation <FaPlaystation /></Button>
            <Button variant="success m-1">Xbox <FaXbox /></Button>
            <Button variant="danger m-1">Nintendo <SiNintendoswitch /></Button>

            <GameList/>
            </section>
              </>
    )
}

export default Games;