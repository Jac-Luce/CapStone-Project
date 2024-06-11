import React from 'react';
import './navStyle.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiPadlock } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../asset/logo.png";

export default function MyNavb() {
  return (
    <Navbar expand="lg" className="navbarHome" fixed="top">
      <Container className='justify-content-between'>
        <Navbar.Brand as={Link} to="/">
          <img className='logoNavbar' alt='logoimage' src={logo} />
          {' '} <span className='logoName'>Hair Beauty Salon</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/chiSiamo' className='ms-4'>Chi siamo</Nav.Link>
            <Nav.Link as={Link} to='/services' className='ms-4'>Servizi</Nav.Link>
            <Nav.Link as={Link} to='/booking' className='ms-4'>Prenota qui</Nav.Link>
          </Nav>
          <Button variant='outline-primary' className='rounded-circle' as={Link} to='/adminLogin'> <GiPadlock /> </Button>
          <Button variant='outline-primary' className='ms-1 rounded-circle' as={Link} to='/profile'> <FaRegUserCircle /> </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
