import React from 'react';
import JumbWelcome from '../../components/home-item/JumbWelcome';
import Presentation from '../../components/home-item/Presentation';
import ServHome from '../../components/home-item/ServHome';
import ProdHome from '../../components/home-item/ProdHome';
import BookHome from '../../components/home-item/BookHome';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <Container fluid>
        <JumbWelcome />
        <Presentation />
        <Container className='d-flex'>
            <ServHome />
            <ProdHome />
            <BookHome />
        </Container>
    </Container>
  )
}
