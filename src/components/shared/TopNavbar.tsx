import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import HomePage from "../../pages/HomePage";
import Games from "../Games/Games";
import Characters from "../Characters/Characters";
import Worlds from "../Worlds/Worlds";
import Equipment from "../Equipment/Equipment";
import AddNew from "../AddNew/AddNew";

import { GiCharacter, GiAxeSword } from 'react-icons/gi';
import { CgGames } from 'react-icons/cg';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';



const TopNavbar = () => {

    return (
        <>
        <BrowserRouter>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">ElectricGames</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home <AiOutlineHome /></Nav.Link>
                    <Nav.Link href="/games">Games <CgGames /></Nav.Link>
                    <Nav.Link href="/characters">Characters <GiCharacter /></Nav.Link>
                    <Nav.Link href="/worlds">Worlds <BiWorld /></Nav.Link>
                    <Nav.Link href="/equipment">Equipment <GiAxeSword /></Nav.Link>
                </Nav>
                <Form>
                    <Nav.Link href="/add">
                    <Button variant="success">Add New!</Button>
                    </Nav.Link>
                </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="/characters" element={<Characters />}></Route>
                <Route path="/worlds" element={<Worlds />}></Route>
                <Route path="/equipment" element={<Equipment />}></Route>
                <Route path="/add" element={<AddNew />}></Route>
            </Routes>
        </main>
        </BrowserRouter>
      </>
    )
}

export default TopNavbar;