import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function NewService({servicesList}) {

    //Stato visualizzazione modale
    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const myBody = {'name': name, 'description': description, 'price': price};

    const addService = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/services/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

            if(response.ok){
                servicesList();
            } else {
                alert('Aggiunta nuovo servizio fallita!')
            };

        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
        <Button className='rounded-pill' onClick={() => setShow(true)}>Aggiungi nuovo servizio</Button>

        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Aggiungi nuovo servizio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            autoFocus
                            type='text'
                            placeholder='Aggiungi il nome del servizio'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type='text'
                            placeholder='Aggiungi la descrizione del servizio'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type='text'
                            placeholder='Aggiungi il prezzo del servizio'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' onClick={addService}>Salva</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
