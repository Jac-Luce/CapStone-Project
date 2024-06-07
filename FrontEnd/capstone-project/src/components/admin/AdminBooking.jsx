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
        <Row className='justify-content-md-center'>
            <Col>
                <ListGroup variant='flush'>
                    {bookingList.map((e) =>
                    <ListGroup.Item>
                        <p>Prenotazione effettuata da: {e.user.name}  <span>{e.user.lastName}</span></p>
                        <p>Email: {e.user.email}</p>
                        <p>Servizio prenotato: {e.service.name}</p>
                        <p>Il giorno: {formatDate(e.date)}</p>
                    </ListGroup.Item>
                    )}
                </ListGroup>
            </Col>
        </Row>
    </Container>
    </>
  )
}
