import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import { FaEyeLowVision } from "react-icons/fa6";

export default function EditPassword({secondProfile}) {
    //Stato del modale
    const [show, setShow] = useState(false);

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {token} = useContext(AuthContext);

    const editMyPassword = async (e) => {
        e.preventDefault();
        const myBody = {"password": password};

        try {
            const response = await fetch(`http://localhost:3001/user/edit`, {
                method: 'PUT',
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

            if(response.ok) {
                const result = await response.json();
                secondProfile();
                alert('Password modificata con successo!');
            } else (
                alert('Modifica non andata a buon fine!')
            )
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <>
    <button className='btn btn-link' style={{color: 'green'}} onClick={() => setShow(true)}>Modifica password</button>

    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Modifica password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    
                    <Form.Control 
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Inserisci password'
                    />
                    <Form.Label className='ms-1 mt-3'>
                        <Form.Check 
                            type='checkbox'
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            label={<FaEyeLowVision />}
                        />
                       
                    </Form.Label>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button type='submit' onClick={editMyPassword}>Salva</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}
