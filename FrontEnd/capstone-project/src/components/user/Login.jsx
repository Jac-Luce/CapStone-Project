import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';

export default function Login() {

    const {token, setToken} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const myBody = {'email': email.toString(), 'password': password.toString()};

    const userLogin = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(myBody)
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem('token', result.token);
                setToken(result.token);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if(token !== "") {
            navigate('/profile')
        }
    }, [token]);

  return (
    <Container fluid='sm'>
        <Row className='justify-content-md-center'>
            <Col>
                <Form>
                    <Form.Group>
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
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}
