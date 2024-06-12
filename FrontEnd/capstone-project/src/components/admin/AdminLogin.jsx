import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {token, setToken} = useContext(AuthContext);

    const adminLogin = async(e) => {
        e.preventDefault();
        const myBody = {"email": email.toString(), "password": password.toString()};

        try {
            const response = await fetch("http://localhost:3001/adminLogin", {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(myBody)
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem("token", result.token);
                setToken(result.token);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(token) {
            navigate("/adminHome");
        }
    });
  return (
    <Container fluid='sm' className='mb-5'>
        <Row className='justify-content-md-center'>
            <Col>
                <h1>Area riservata</h1>
                <Form onSubmit={adminLogin}>
                    <Form.Group className='my-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Inserisci email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Inserisci password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button type='submit' className='my-3'>Accedi</Button>
                </Form>
                <Link to='/'>Se non sei un amministratore, torna alla Home</Link>
            </Col>
        </Row>
    </Container>
  )
}
