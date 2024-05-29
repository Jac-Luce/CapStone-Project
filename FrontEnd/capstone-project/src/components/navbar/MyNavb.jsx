import React from 'react';
import './navStyle.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiPadlock } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";

export default function MyNavb() {
  return (
    <Navbar expand="lg" className="navbarHome" fixed="top">
        <Container className='justify-content-between'>
            <Navbar.Brand as={Link} to="/">
                <img className='logoNavbar' alt='logo' src='' />
            </Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link href='#'/*as={Link} to='/chiSiamo'*/>Chi siamo</Nav.Link>
                <Nav.Link as={Link} to='/services'>Servizi</Nav.Link>
                <Nav.Link href='#'/*as={Link} to='/shop'*/>Prodotti</Nav.Link>
                <Nav.Link as={Link} to='/booking'>Prenotazioni</Nav.Link>
                <Nav.Link as={Link} to='/newBooking'>Nuova prenotazione</Nav.Link>
            </Nav>
            <Button> <GiPadlock /> </Button>
            <Button className='ms-1'> <FaRegUserCircle /> </Button>
        </Container>
    </Navbar>
  )
}
