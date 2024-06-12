import React from 'react';
import { Container } from 'react-bootstrap';
import Login from '../../components/user/Login.jsx';
import MyNavb from '../../components/navbar/MyNavb.jsx';

export default function Booking() {
  return (
    <>
    <MyNavb />
    <Container fluid className='my-5 mx-5 pt-5'>
        <h3 className='mt-5 text-center'>Per effettuare una prenotazione effettua il Login o registrati!</h3>
        <Login />
    </Container>
    </>
  )
}
