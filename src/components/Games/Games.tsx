import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

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

            <Row xs={1} md={2} className="g-4 mt-2">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            ))}
            </Row>
        </section>
              </>
    )
}

export default Games;