import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='p-2 d-grid'>
        <button onClick={handleShow} className='btn btn-success'>Add Category</button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FloatingLabel controlId="cID" label="Category ID" className="mb-3">
              <Form.Control type="number" placeholder="" />
            </FloatingLabel>
            <FloatingLabel controlId="ctitle" label="Category Title" className="mb-3">
              <Form.Control type="text" placeholder="" />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  )
}

export default Category