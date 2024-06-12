import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './style.css';
import EditForm from './EditForm.jsx';
import DeleteButton from './DeleteButton.jsx';
import NewService from './NewService.jsx';
import AdminNavbar from '../admin/AdminNavbar.jsx';

export default function ServicesList() {
    const [services, setServices] = useState([]);

    const servicesList = async () => {
        try {
            const response = await fetch("http://localhost:3001/services/list", {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });
            if(response.ok) {
                const result = await response.json();
                //console.log(result);
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
    <>
    <AdminNavbar />
    <Container fluid='sm' className='mt-4'>
    <h2 className='text-center mb-5'>Modifica e aggiungi i tuoi servizi</h2>
    <Row className='justify-content-md-center'>
        <Col md='8'>
            <div className='text-center mb-5'>
                <NewService serviceList={servicesList}/>
            </div>
            
            <ListGroup variant='flush' className='fs-5'>
                {services.map((service) => (
                    <ListGroup.Item>
                        <span className='m-2'>{service.name}</span>
                        <span className='m-2'>{service.description}</span>
                        <span className='m-2'>{service.price}€</span>
                        <EditForm id = {service._id}/>
                        <DeleteButton id = {service._id}/>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Col>    
    </Row>
    </Container>
    </>
  )
}
