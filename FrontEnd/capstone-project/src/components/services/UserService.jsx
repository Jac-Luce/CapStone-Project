import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './style.css';
import sfumature from '../../asset/sfumature.jpg'

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
        <h2 className='text-center mt-3 mb-3'>I nostri servizi</h2>
        <Card className='mt-4 mb-5 border-white rounded-0'>
            <Card.Img src={sfumature} alt='serviceImage' className='rounded-0'/>
        </Card>
        <Row className='justify-content-md-center'>
            <Col>
                <div className='border-bottom border-secondary d-flex justify-content-center align-self-center mt-4'>
                    <p className='text-center verticalText'>STYLING</p>
                </div>
                <div className='mt-5 pt-5 d-flex justify-content-center align-self-center'>
                    <p className='text-center verticalText'>CARE TREATMENT</p>
                </div>
                <div className='border-top border-secondary divColor pt-5 d-flex justify-content-center align-self-center'>
                    <p className='mt-5 text-center verticalText'>COLOR CARE</p>
                </div>
            </Col>
            <Col md='8'>
            
            <ListGroup variant='flush' className='fs-6 listText '>
                {services.map((service) => (
                    <ListGroup.Item className='mb-3 '>
                       <span>{service.name}</span><span className='ms-3'>{service.price}€</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </Col>    
        </Row>
    </Container>
  )
}
