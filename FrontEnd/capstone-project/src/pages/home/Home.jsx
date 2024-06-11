import React from 'react';
import JumbWelcome from '../../components/home-item/JumbWelcome.jsx';
import Presentation from '../../components/home-item/Presentation.jsx';
import ServHome from '../../components/home-item/ServHome.jsx';
import BookHome from '../../components/home-item/BookHome.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavb from '../../components/navbar/MyNavb.jsx';

export default function Home() {
  return (
    <>
    <MyNavb />
    <Container className='mt-5 pt-5 mb-5'>
        <JumbWelcome />
        <Presentation />
        <Container className='d-flex'>
          <Row>
            <Col>
              <ServHome />
            </Col>
            <Col>
              <BookHome />
            </Col>
          </Row>
        </Container>
    </Container>
    </>
  )
}
