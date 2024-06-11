import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './style.css';

export default function UserService() {
    const [services, setServices] = useState([]);

    const servicesList = async () => {
        try {
            const response = await fetch("http://localhost:3001/services/list", {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });
            if(response.ok) {
                const result = await response.json();
                setServices(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        servicesList();
    }, [services]);
  return (
    <Container fluid='sm'>
    <Row className='justify-content-md-center'>
        <h2 className='text-center mt-3 mb-3'>I nostri servizi</h2>
        <Col md='8'>
            
            <ListGroup variant='flush'>
                {services.map((service) => (
                    <ListGroup.Item>
                        <p>{service.name}</p>
                        <p>{service.description}</p>
                        <p>{service.price}€</p>
                        
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Col>    
    </Row>
    </Container>
  )
}
