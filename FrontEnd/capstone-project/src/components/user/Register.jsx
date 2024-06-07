import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MyNavb from '../navbar/MyNavb.jsx';

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const myBody = {'name': name, 'lastName': lastName, 'email': email, 'password': password};

    const newUser = async (e) => {
        e.preventDefault();

        try { 
            const response = await fetch('http://localhost:3001/signIn', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

            if (response.ok) {
               navigate('/login');
            }
        } catch (error) {
            console.error(error);
        } 
    };

  return (
    <>
    <MyNavb />
    <Container fluid='sm'>
        
        <Row className='justify-content-md-center'>
            <Col md='5'>
                <h5 className='mb-3'>Compila i campi per effettuare la registrazione</h5>
                <Form>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='Inserisci il tuo nome..'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='Inserisci il tuo cognome..'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='Inserisci email..'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type='text'
                        placeholder='Crea una password..'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button type='submit' className='mt-4' onClick={newUser}>Registrati</Button>
                </Form>
                <Link to="/login">Hai già un account? Fai l'accesso.</Link>
            </Col>
        </Row>
    </Container>
    </>
  )
}
