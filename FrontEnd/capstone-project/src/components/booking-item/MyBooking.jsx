import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';

export default function MyBooking({userId}) {
    const [myBookingList, setMyBookingList] = useState([]);
    const {token} = useContext(AuthContext);

    //const [show, setShow] = useState(false);

    const getMyBooking = async () => {
        try {
            const response = await fetch(`http://localhost:3001/user/${userId}/myBooking`, {
                method: "GET",
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
            });
            console.log(response.status);
            if(response.ok) {
                //const text = await response.text();
                //console.log(text);
                const result = await response.json();
                console.log(result);
                setMyBookingList(result);
               /* if(text) {
                    const result = JSON.parse(text);
                    console.log(result);
                    setMyBookingList(result);
                } else {
                    console.log('ricevuta risposta vuota');
                } */
            } else {
                console.error(response.statusText);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMyBooking();
    }, [myBookingList]);

  return (
    <>
    <Container fluid='sm'>
                <Row className='justify-content-md-center'>
                    <Col md='8'>
                        {myBookingList.length > 0 ? (
                            <ListGroup variant='flush'>
                                {myBookingList.map((booking, index) => (
                                    <ListGroup.Item key={index}>{JSON.stringify(booking)}</ListGroup.Item>
                       // <ListGroup.Item>
                         //   <p>{e.service}</p>
                          //  <p>{e.date}</p>
                        //</ListGroup.Item>
                        ))}
                            </ListGroup> ) : (<p>Non ci sono prenotazioni</p>)}
                    </Col>
                </Row>
            </Container>

    {/**
   <Button onClick={() => setShow(true)}>Le mie prenotazioni</Button>

    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Le mie prenotazioni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container fluid='sm'>
                <Row className='justify-content-md-center'>
                    <Col md='8'>
                        {myBookingList.length > 0 ? (
                            <ListGroup variant='flush'>
                                {myBookingList.map((booking, index) => (
                                    <ListGroup.Item key={index}>{JSON.stringify(booking)}</ListGroup.Item>
                       // <ListGroup.Item>
                         //   <p>{e.service}</p>
                          //  <p>{e.date}</p>
                        //</ListGroup.Item>
                        ))}
                            </ListGroup> ) : (<p>Non ci sono prenotazioni</p>)}
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
    </Modal> 
    
     <Container fluid='sm'>
        <Row className='justify-content-md-center'>
            <Col md='8'>
                {myBookingList.length > 0 ? (
                <ListGroup variant='flush'>
                    {myBookingList.map((booking, index) => (
                        <ListGroup.Item key={index}>{booking.service}</ListGroup.Item>
                       // <ListGroup.Item>
                         //   <p>{e.service}</p>
                          //  <p>{e.date}</p>
                        //</ListGroup.Item>
                    ))}
                </ListGroup> ) : (<p>No booking list</p>)}
            </Col>
        </Row>
                </Container>*/}
    </>
  )
}
