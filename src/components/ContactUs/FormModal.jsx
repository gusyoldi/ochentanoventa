import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormModal() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // useEffect (() => {
  //   sendEmail()
  // }, [isValidated])
  
  return (
    <>
      
      <button type="submit" value="Send" onClick={handleShow}>
      ENVIAR CONSULTA
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tu mensaje fue enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Gracias por contactarnos, te responderemos a la brevedad.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormModal;