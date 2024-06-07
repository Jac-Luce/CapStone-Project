import React from 'react';
import JumbWelcome from '../../components/home-item/JumbWelcome.jsx';
import Presentation from '../../components/home-item/Presentation.jsx';
import ServHome from '../../components/home-item/ServHome.jsx';
import ProdHome from '../../components/home-item/ProdHome.jsx';
import BookHome from '../../components/home-item/BookHome.jsx';
import { Container } from 'react-bootstrap';
import MyNavb from '../../components/navbar/MyNavb.jsx';

export default function Home() {
  return (
    <>
    <MyNavb />
    <Container fluid className='mt-5 pt-5'>
        <JumbWelcome />
        <Presentation />
        <Container className='d-flex'>
            <ServHome />
            
            <BookHome />
        </Container>
    </Container>
    </>
  )
}
