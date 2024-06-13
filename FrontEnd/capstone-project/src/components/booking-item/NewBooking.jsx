import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
//import './style.css';
import { AuthContext } from '../../contextProvider/AuthContextProvider.jsx';
import AlertSuccess from '../design/AlertSuccess.jsx';
import AlertDanger from '../design/AlertDanger.jsx';

export default function NewBooking() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const {token, getMyBooking} = useContext(AuthContext);
    //Stato che tiene traccia del servizio selezionato
    const [selectedService, setSelectedService] = useState("");

    const [alertSucc, setAlertSucc] = useState(false);
    const [alertDanger, setAlertDanger] = useState(false);

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
        const myBody = {'date': date, 'time': time};

        try {
            const response = await fetch(`http://localhost:3001/booking/newBooking/${selectedService}`, {
                method: 'POST',
                headers: {'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json'},
                body: JSON.stringify(myBody)
            });

            if(response.ok) {
                const result = await response.json();
                getMyBooking();
                setAlertSucc(true);
                setAlertDanger(false);
            } else {
                setAlertSucc(false);
                setAlertDanger(true);
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
                        <option key={service._id} value={service._id}>{service.name} {service.price}€</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='my-4'>
                <Form.Label>Seleziona una data</Form.Label>
                <Form.Control 
                    type='date'
                    placeholder='inserisci data'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group className='mb-4'>
                <Form.Label>Seleziona un orario</Form.Label>
                <Form.Control 
                    type='time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}                
                />
            </Form.Group>
        </Form>
        {alertSucc && <AlertSuccess />}
        {alertDanger && <AlertDanger />}
        <Button type='submit' className='rounded-pill' onClick={addBooking}>Prenota</Button>
    </>
  )
}
