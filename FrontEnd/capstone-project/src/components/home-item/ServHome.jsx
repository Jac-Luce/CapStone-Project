import React from 'react';
import servizio from '../../asset/servizio.jpg';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ServHome() {
    const navigate = useNavigate();

    const serviceNavigate = () => {
        navigate('/services');
    };

  return (
    <Card className='me-5 ms-5'>
        <Card.Img src={servizio} alt='Service image'/>
        <Card.ImgOverlay className='serviceButton'>
            <Button onClick={serviceNavigate} variant='outline-secondary' size='sm' >I nostri servizi</Button>
        </Card.ImgOverlay>
    </Card>
  )
}
