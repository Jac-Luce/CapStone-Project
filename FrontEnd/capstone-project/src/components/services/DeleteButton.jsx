import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";

export default function DeleteButton(props) {
    const {id} = props;

    const deleteService = async () => {

        try {
            const response = await fetch(`http://localhost:3001/services/${id}`, {
                method: 'DELETE'
            });

            if(response.ok){
                alert('Il servizio è stato eliminato!')
            } else {
                alert('Riprova! Il servizio non è stato eliminato!')
            };
            
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <Button variant='danger' className='rounded-circle px-1 py-0' onClick={deleteService}> <MdDeleteForever /> </Button>
  )
}
