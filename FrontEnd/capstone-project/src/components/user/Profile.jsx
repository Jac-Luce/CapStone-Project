import React from 'react';
import { Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { AuthContext }from '../../contextProvider/AuthContextProvider.jsx';
import MyBooking from '../booking-item/MyBooking.jsx';
import NewBooking from '../booking-item/NewBooking.jsx';
import MyNavb from '../navbar/MyNavb.jsx';

export default function Profile() {
    //Stato delle Tabs
    const [selected, setSelected] = useState("booking");

    const {token} = useContext(AuthContext);

    const [data, setData] = useState({});

    const userProfile = async () => {
        try {
            const response = await fetch('http://localhost:3001/profile', {
                method:'GET',
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
            });
            if (response.ok) {
                const result = await response.json();
                //console.log(result);
                setData(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        userProfile();
    }, []);

  return (
    <>
    <MyNavb />
    <Container className='mt-5 pt-5'>
        <Row className='justify-content-md-center'>
            <Col md='3' xs='6'>
                <Card className='mt-5 border-white'>
                    <Card.Body>
                        <Card.Title>Ciao {data.name},</Card.Title>
                        <Card.Text>Qui puoi effettuare una prenotazione</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md='9' xs='12'>
            <Tabs
                id="controlled-tab-example"
                activeKey={selected}
                onSelect={(e) => setSelected(e)}
                className="mb-3 mt-5"
            >
                <Tab eventKey="booking" title="Effettua una prenotazione">
                    <NewBooking />
                </Tab>
                <Tab eventKey="bookingList" title="Le tue prenotazioni">
                    <MyBooking />
                </Tab>
            </Tabs>
            </Col>
        </Row>
    </Container>
    </>
  )
}
