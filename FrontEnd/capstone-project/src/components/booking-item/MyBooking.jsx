import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import DeleteBooking from './DeleteBooking.jsx';
import EditBooking from './EditBooking.jsx';

export default function MyBooking() {
    //Formatto la data per visualizzarla nel formato desiderato
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    //const [myBookingList, setMyBookingList] = useState([]);
    //const {token} = useContext(AuthContext);
    const {myBookingList, getMyBooking} = useContext(AuthContext);

    /*const getMyBooking = async () => {
        try {
            const response = await fetch(`http://localhost:3001/user/myBooking`, {
                method: "GET",
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'}
            });
            //console.log(response.status);
            if(response.ok) {
                const result = await response.json();
                //console.log(result);
                setMyBookingList(result);
            } else {
                console.error(response.statusText);
            }
        } catch (error) {
            console.error(error);
        }
    };*/

    useEffect(() => {
        getMyBooking();
    }, []);

  return (

    <Container fluid className='pt-5'>
        <Row className='justify-content-md-center'>
            <Col>
                {myBookingList.length > 0 ? (
                    <ListGroup variant='flush'>
                        {myBookingList.map((booking, index) => (
                            <ListGroup.Item key={index}>
                                <p>Servizio scelto: {booking.service.name}</p>
                                <p>Costo: {booking.service.price}€</p>
                                <p>Giorno: {formatDate(booking.date)}</p>
                                <p>Ora: {booking.time}</p>
                                <p> <EditBooking id ={booking._id} getMyBooking={getMyBooking} /> <span> <DeleteBooking id ={booking._id} getMyBooking={getMyBooking} /> </span> </p>
                                <hr />
                            </ListGroup.Item>
                        ))}
                    </ListGroup> ) : (<p>Non ci sono prenotazioni</p>)}
            </Col>
        </Row>
    </Container>
  )
}
