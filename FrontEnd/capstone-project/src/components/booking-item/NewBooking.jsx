import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
//import './style.css';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';

export default function NewBooking() {
    const [date, setDate] = useState("");
    const {token, getMyBooking} = useContext(AuthContext);
    //Stato che tiene traccia del servizio selezionato
    const [selectedService, setSelectedService] = useState("");

    //Stato lista servizi
    const [servicesList, setServicesList] = useState([]);
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

    //Creo nuova prenotazione
    const addBooking = async (e) => {
        e.preventDefault();
        const myBody = {'date': date};

        try {
            const response = await fetch(`http://localhost:3001/booking/newBooking/${selectedService}`, {
                method: 'POST',
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

            if(response.ok) {
                const result = await response.json();
                getMyBooking();
            }

        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
        <Form className='pt-5'>
            <Form.Group>
                <Form.Select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                >
                    <option>Scegli il servizio</option>
                    {servicesList.map((service) => (
                        <option key={service._id} value={service._id}>{service.name} {service.price}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='my-4'>
                <Form.Control 
                    type='date'
                    placeholder='inserisci data'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Form.Group>
        </Form>

        <Button type='submit' className='rounded-pill' onClick={addBooking}>Prenota</Button>
    </>
  )
}
