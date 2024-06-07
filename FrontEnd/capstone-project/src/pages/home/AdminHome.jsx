import React from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar.jsx';
import JumbWelcome from '../../components/home-item/JumbWelcome.jsx';
import Presentation from '../../components/home-item/Presentation.jsx';
import ServHome from '../../components/home-item/ServHome.jsx';
import ProdHome from '../../components/home-item/ProdHome.jsx';
import BookHome from '../../components/home-item/BookHome.jsx';
import { Container } from 'react-bootstrap';

export default function AdminHome() {
  return (
    <>
    <AdminNavbar />
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
