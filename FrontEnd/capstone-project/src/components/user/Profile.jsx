import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { AuthContext }from '../../contextProvider/AuthContextProvider.jsx';
import Logout from './Logout.jsx';
import BookingTabs from '../booking-item/BookingTabs.jsx';

export default function Profile() {
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
                <BookingTabs />
            </Col>
        </Row>
    </Container>
  )
}
