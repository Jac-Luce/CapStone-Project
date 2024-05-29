import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';

export default function EditForm(props) {

  const {id} = props;
  //console.log(id)

  //Stato di visualizzazione modale
  const[show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const editService = async (e) => {
    e.preventDefault();

    const myBody = {'name': name, 'description': description, 'price': price};
    try {
            
      const response = await fetch(`http://localhost:3001/services/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(myBody)
      });
      if(response.ok) {
        const result = await response.json();
        //console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={() => setShow(true)}> <FaRegEdit /> </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica servizio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                autoFocus
                type='text'
                placeholder='Modifica nome servizio'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control 
                type='text'
                placeholder='Modifica descrizione servizio'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control 
                type='text'
                placeholder='Modifica prezzo servizio'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' onClick={editService}>Salva</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}