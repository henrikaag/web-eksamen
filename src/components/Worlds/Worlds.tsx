import WorldList from './WorldList';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditWorld from "./EditWorld";
import DeleteWorld from "./DeleteWorld";

import { FaPlaystation, FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';

const Worlds = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <>
        <section className="container mt-4">
            <h1>Worlds in ElectricGames</h1>

            <Button variant="warning m-1">PC <MdComputer /></Button>
            <Button variant="primary m-1">Playstation <FaPlaystation /></Button>
            <Button variant="success m-1">Xbox <FaXbox /></Button>
            <Button variant="danger m-1">Nintendo Switch<SiNintendoswitch /></Button>
            <p className="m-1">Here you can see worlds from different games. Use the buttons above to filter them by platform, or use the search field to find a specific world</p>

            <hr></hr>

            {/*EDIT BUTTON*/}
                <Button variant="warning" onClick={handleShow} className="me-2">
                    Edit Worlds <BsPencilSquare />
                </Button>
            {/*EDIT MODAL POPUP*/}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit World</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <EditWorld />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            {/*DELETE BUTTON*/}
                <Button variant="danger" onClick={handleShow2}>
                    Delete Worlds <FiTrash2 />
                </Button>
            {/*DELETE MODAL POPUP*/}
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete World</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <DeleteWorld />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            <WorldList />

            <br></br>
            </section>
        </>
    )
}

export default Worlds;