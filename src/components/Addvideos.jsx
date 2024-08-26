import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addvideos() {

    const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


  return (
    <>
    <button onClick={handleShow} className='btn'><i className="fa-solid fa-square-plus fa-2x" style={{color: "#FFD43B",}} />
    </button>

    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false} >
    <Modal.Header closeButton>
      <Modal.Title >Add Video</Modal.Title>
    </Modal.Header>
    <Modal.Body>

      <FloatingLabel
        controlId="floatingID" label="Video ID" className="mb-3">
        <Form.Control type="number" placeholder="1" />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="imgurl" label="Video Image URL" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="vidoeurl" label="Youtube Video URL" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary">Upload</Button>
    </Modal.Footer>
  </Modal>


  </>
  )
}

export default Addvideos