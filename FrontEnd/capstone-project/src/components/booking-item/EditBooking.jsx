import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';

export default function EditBooking(props) {
    const {id, getMyBooking} = props;
    
    //Stato del modale
    const [show, setShow] = useState(false);

    //Stato lista servizi
    const [servicesList, setServicesList] = useState([]);

    //Stato servizio selezionato
    const [selsectedService, setSelectedService] = useState("");
    const [date, setDate] = useState("");

    //Ricevo lista servizi
    const allServices = async () => {
        try {
            const response = await fetch("http://localhost:3001/services/list", {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });
            if(response.ok) {
                const result = await response.json();
                //console.log(result);
                setServicesList(result);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        allServices();
    }, []);

    //Modifico prenotazione
    const editMyBooking = async (e) => {
        e.preventDefault();
        const myBody = {"date": date};

        try {
            const response = await fetch(`http://localhost:3001/booking/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

            if(response.ok) {
                const result = await response.json();
                setDate(result);
                getMyBooking();
            }
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <>
    <Button onClick={() => setShow(true)} className='rounded-circle ms-4 px-1 py-0'> <FaRegEdit /> </Button>

    <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Modifica prenotazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Select
                    value={selsectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    >
                        <option>Scegli il servizio</option>
                        {servicesList.map((service) => (
                            <option key={service._id} value={service._id}>{service.name} {service.price}€</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button type='submit' onClick={editMyBooking}>Salva</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}
