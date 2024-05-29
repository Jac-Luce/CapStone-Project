import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.css';

export default function NewBooking() {
    //const [userName, setUserName] = useState("");
    //const [serviceName, setServiceName] = useState("");
    const [date, setDate] = useState("");

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
        const myBody = {/*'userName': userName, 'serviceName': serviceName,*/ 'date': date};

        try {
            const response = await fetch('http://localhost:3001/booking/newBooking', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
        <Form className='booking-form'>
        { /* <Form.Group>
               <Form.Control 
                    autoFocus
                    type='text'
                    placeholder='username'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                /> 
            </Form.Group>*/}
            <Form.Group>
                <Form.Select>
                    <option>Scegli il servizio</option>
                    {servicesList.map((service) => (
                        <option value={service._id}/*value={serviceName} onChange={setServiceName(service._id)}*/>{service.name} {service.price}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    
                    type='date'
                    placeholder='inserisci data'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Form.Group>
        </Form>

        <Button type='submit' onClick={addBooking}>Prenota</Button>
    </>
  )
}
