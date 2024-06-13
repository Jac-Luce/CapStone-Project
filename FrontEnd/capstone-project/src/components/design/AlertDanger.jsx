import React from 'react';
import { Alert } from 'react-bootstrap';

export default function AlertDanger() {
  return (
    <Alert variant='danger' dismissible>La prenotazione non è andata a buon fine!</Alert>
  )
}
