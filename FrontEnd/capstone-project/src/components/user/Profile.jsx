import React from 'react';
import { Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { AuthContext }from '../../contextProvider/AuthContextProvider.jsx';
import Logout from './Logout.jsx';
import MyBooking from '../booking-item/MyBooking.jsx';
import NewBooking from '../booking-item/NewBooking.jsx';

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
    <Container className='mt-5 pt-5'>
        <Row className='justify-content-md-center'>
            <Col md='4' xs='6'>
                <Card>
                    <Card.Body>
                        <Card.Title>{data.name} {data.lastName}</Card.Title>
                        <p>Ciao</p>
                        <Card.Text>{data.email}</Card.Text>
                    </Card.Body>
                </Card>
                <Logout />
                
            </Col>
            <Col md='8' xs='12'>
            <Tabs
                id="controlled-tab-example"
                activeKey={selected}
                onSelect={(e) => setSelected(e)}
                className="mb-3"
            >
                <Tab eventKey="booking" title="Effettua una prenotazione">
                    <NewBooking />
                </Tab>
                <Tab eventKey="bookingList" title="Le tue prenotazioni">
                    <MyBooking userId={data._id}/>
                </Tab>
            </Tabs>
            </Col>
        </Row>
    </Container>
  )
}
