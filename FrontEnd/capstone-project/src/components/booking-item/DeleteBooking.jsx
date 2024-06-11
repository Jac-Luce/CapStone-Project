import React from 'react';
import { Button } from 'react-bootstrap';
import { MdDeleteForever } from "react-icons/md";

export default function DeleteBooking(props) {
    const {id, getMyBooking} = props;

    const deleteMyBooking = async () => {

        try {
            const response = await fetch(`http://localhost:3001/booking/${id}`, {
                method: 'DELETE'
            });

            if(response.ok){
                alert('La prenotazione è stata eliminata!');
                getMyBooking();
            } else {
                alert('Riprova! La prenotazione non è stata eliminata!')
            };
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <Button variant='danger' onClick={deleteMyBooking}> <MdDeleteForever /> </Button>
  )
}
