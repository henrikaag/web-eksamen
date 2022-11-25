import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditEquipment from "./EditEquipment";
import DeleteEquipment from "./DeleteEquipment";
import EquipmentList from "./EquipmentList";

import { FiTrash2 } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';

const Equipment = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
        <section className="container mt-4">
            <h1>Equipment used by characters in ElectricGames</h1>
            <p className="m-1">Here you can see equipment for different characters. Use the buttons below if you want to edit the current equipment in the database, or use the delete button if you want to remove a specific equipment. Reload the site to see your changes.</p>

            <hr></hr>

            {/*EDIT BUTTON*/}
                <Button variant="warning" onClick={handleShow} className="me-2">
                    Edit Equipment <BsPencilSquare />
                </Button>
            {/*EDIT MODAL POPUP*/}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Equipment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <EditEquipment />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            {/*DELETE BUTTON*/}
                <Button variant="danger" onClick={handleShow2}>
                    Delete Equipment <FiTrash2 />
                </Button>
            {/*DELETE MODAL POPUP*/}
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete Equipment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <DeleteEquipment />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>

            <EquipmentList />

            <br></br>
            </section>
        </>
    )
}

export default Equipment;