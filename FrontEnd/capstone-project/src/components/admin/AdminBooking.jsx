import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar.jsx';
import './style.css';

export default function AdminBooking() {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const [bookingList, setBookingList] = useState([]);

    const allBooking = async () => {
        try {
            const response = await fetch("http://localhost:3001/booking/list", {
                method: "GET",
                headers: {'Content-Type': 'application/json'}
            });
            if(response.ok) {
                const result = await response.json();
                setBookingList(result);
            }

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        allBooking();
    }, [bookingList]);
  return (
    <>
    <AdminNavbar/>
    <Container className='adminBooking'>
        <h2 className='text-center mb-5'>Prenotazioni ricevute</h2>
        <Row className='justify-content-md-center fs-6'>
            <Col md='8'>
                <ListGroup variant='flush'>
                    {bookingList.map((e) =>
                    <ListGroup.Item>
                        <p>Prenotazione effettuata da:   <span className='ms-2'>{e.user.name} {e.user.lastName}</span></p>
                        <p>Email: <span className='ms-2'>{e.user.email}</span></p>
                        <p>Servizio prenotato: <span className='ms-2'>{e.service.name}</span></p>
                        <p>Il giorno: <span className='ms-2'>{formatDate(e.date)}</span> </p>
                    </ListGroup.Item>
                    )}
                </ListGroup>
            </Col>
        </Row>
    </Container>
    </>
  )
}
