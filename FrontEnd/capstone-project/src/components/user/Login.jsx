import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import {AuthContext} from '../../contextProvider/AuthContextProvider.jsx';
import MyNavb from '../navbar/MyNavb.jsx';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const {token, setToken} = useContext(AuthContext);

    const userLogin = async(e) => {
        e.preventDefault();
        const myBody = {'email': email.toString(), 'password': password.toString()};

        try { 
            const response = await fetch('http://localhost:3001/login', {
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
           // console.log(token);
            navigate('/profile');
        }
    }, [token]);

  return (
    <>
    <Container fluid='sm'>
        <Row className='justify-content-md-center'>
            <Col>
                <Form onSubmit={userLogin}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Inserisci email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Inserisci password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button className='mb-3' type='submit'>Accedi</Button>    
                </Form>
                <Link to='/signIn'>Non sei ancora registrato? Registrati</Link>
            </Col>
        </Row>
    </Container>
    </>
  )
}
