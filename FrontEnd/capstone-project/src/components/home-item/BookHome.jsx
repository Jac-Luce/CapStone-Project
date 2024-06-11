import React from 'react';
import attrezzatura from '../../asset/attrezzatura.jpg';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function BookHome() {
    const navigate = useNavigate();

    const bookNavigate = () => {
        navigate('/booking');
    };
  return (
    <Card className='ms-5 me-5'>
        <Card.Img src={attrezzatura} alt='Booking image'/>
        <Card.ImgOverlay>
            <Button onClick={bookNavigate} variant='outline-secondary' size='sm'>Prenota qui il tuo appuntamento</Button>
        </Card.ImgOverlay>
    </Card>
  )
}
