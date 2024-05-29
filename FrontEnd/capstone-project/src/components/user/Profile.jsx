import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
    const {_id} = useParams();

    const [data, setData] = useState({});

    const userProfile = async () => {
        try {
            const response = await fetch(`http://localhost:3001/${_id}`, {
                method:'GET',
                headers: {'Content-Type': 'application/json'}
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result);
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
    <Container>
        <Row className='justify-content-md-center'>
            <Col md='6'>
                <Card>
                    <Card.Body>
                        <Card.Title>{data.name} {data.lastName}</Card.Title>
                        <Card.Text>{data.email}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}
