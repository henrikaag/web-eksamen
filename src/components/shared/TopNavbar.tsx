import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "../../pages/HomePage";
import Games from "../Games/Games";
import Characters from "../Characters/Characters";
import Worlds from "../Worlds/Worlds";


const TopNavbar = () => {

    return (
        <>
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">ElectricGames</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Hjem</Nav.Link>
                    <Nav.Link href="/games">Games</Nav.Link>
                    <Nav.Link href="/characters">Characters</Nav.Link>
                    <Nav.Link href="/worlds">Worlds</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="/characters" element={<Characters />}></Route>
                <Route path="/worlds" element={<Worlds />}></Route>
            </Routes>
        </main>
        </BrowserRouter>
      </>
    )
}

export default TopNavbar;