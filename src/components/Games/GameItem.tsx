import { useState } from 'react';
import IGame from "../../interfaces/IGame";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { FiTrash2 } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';

import '../../css/GameItem.css';

const GameItem = ({id, title, platform, releaseYear, price, image } : IGame) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <article>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={`https://localhost:7050/images/game-images/${image}`} style={{ width: "100%", height: "300px" }} className="card-image"/>
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>Platform: {platform}</p>
                            <p>Release Year: {releaseYear}</p>
                            <p>{price}$</p>
                        </Card.Text>

                        {/*DELETE BUTTON*/}
                        <Button className="me-2" variant="danger" onClick={handleShow}>
                            Delete <FiTrash2 />
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Delete Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Are you sure you want to delete <b>{title}</b></Form.Label>
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                No, take me back
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Yes, delete
                            </Button>
                            </Modal.Footer>
                        </Modal>

                        {/*EDIT BUTTON*/}
                        <Button variant="info" onClick={handleShow2}>
                            Edit <BsPencilSquare />
                        </Button>

                        <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                            <Modal.Title>Edit {title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                            {/*ENDRE PÅ CONTROLID*/}
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="email" placeholder={title} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="New Price" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Release Year</Form.Label>
                                    <Form.Control type="number" placeholder="Release Year" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select placeholder="Choose platform">
                                        <option>PC</option>
                                        <option>Playstation</option>
                                        <option>Xbox</option>
                                        <option>Nintendo Switch</option>
                                    </Form.Select>
                                    </Form.Group>
                                </Row>
                                </Form>
                            </Modal.Body>

                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                Cancel edit
                            </Button>
                            <Button variant="success" onClick={handleClose2}>
                                Finish editing
                            </Button>
                            </Modal.Footer>
                        </Modal>


                        </Card.Body>
                    </Card>
                </Col>
        </article>
    )
}

export default GameItem;