import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';

export default function EditProfile({secondProfile}) {
    //Stato del modale
    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const {token} = useContext(AuthContext);

    //Modifico dati profilo
    const editMyData = async (e) => {
        e.preventDefault();
        const myBody = {"name": name, "lastName": lastName, "email": email};

        try {
            const response = await fetch(`http://localhost:3001/user/edit`, {
                method: 'PUT',
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

            if(response.ok) {
                const result = await response.json();
                secondProfile();
                alert('Dati modificati con successo!');
            } else (
                alert('La modifica dati non è andata a buon fine!')
            )
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <>
    <button className='btn btn-link' style={{color: 'green'}} onClick={() => setShow(true)}>Modifica qui i tuoi dati</button>

    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Modifica i tuoi dati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control 
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button type='submit' onClick={editMyData}>Salva</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}
