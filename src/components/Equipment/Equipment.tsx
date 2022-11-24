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
            <h1>Characters in ElectricGames</h1>
            <p className="m-1">Here you can see equipment used in different games by characters. Use the buttons above to filter them by platform, or use the search field to find a specific equipment</p>

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