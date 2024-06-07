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
        <Col md='8'>
            
            <ListGroup variant='flush'>
                {services.map((service) => (
                    <ListGroup.Item>
                        <span className='m-2'>{service.name}</span>
                        <span className='m-2'>{service.description}</span>
                        <span className='m-2'>{service.price}</span>
                        
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Col>    
    </Row>
    </Container>
  )
}
