import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../asset/logo.png";
import { MdLogout } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import { useNavigate } from 'react-router-dom';
import '../navbar/navStyle.css';

export default function AdminNavbar() {

    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setToken("");

        localStorage.removeItem("token");

        navigate("/");
    }

  return (
    <Navbar expand="lg" className="navbarHome" fixed="top">
        <Container className='justify-content-between'>
            <Navbar.Brand as={Link} to="/adminHome">
                <img className='logoNavbar' alt='logoimage' src={logo} />
                {' '} <span className='logoName'>Hair Beauty Salon</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/adminHome'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/adminChiSiamo' className='ms-4'>Chi siamo</Nav.Link>
                    <Nav.Link as={Link} to='/servicesAdmin' className='ms-4'>Servizi</Nav.Link>
                    <Nav.Link as={Link} to='/adminBooking' className='ms-4'>Prenotazioni</Nav.Link>
                </Nav>
                <Button variant='danger' className='rounded-circle px-1 py-0' onClick={handleLogout}> <MdLogout /> </Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
