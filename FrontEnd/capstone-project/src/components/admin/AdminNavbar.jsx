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
            </Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link as={Link} to='/adminHome'>Home</Nav.Link>
                <Nav.Link as={Link} to='/adminChiSiamo'>Chi siamo</Nav.Link>
                <Nav.Link as={Link} to='/servicesAdmin'>Servizi</Nav.Link>
                <Nav.Link as={Link} to='/adminBooking'>Prenotazioni</Nav.Link>
            </Nav>
            <Button variant='danger' className='rounded-circle' onClick={handleLogout}> <MdLogout /> </Button>
        </Container>
    </Navbar>
  )
}
