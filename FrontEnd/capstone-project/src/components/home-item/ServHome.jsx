import React from 'react';
import shampoo2 from '../../asset/shampoo2.jpg';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './styleServ.css';

export default function ServHome() {
    const navigate = useNavigate();

    const serviceNavigate = () => {
        navigate('/services');
    };

  return (
    <Card className='me-5 serviziCard'>
        <Card.Img src={shampoo2} alt='Service image'/>
        <Card.ImgOverlay>
            <Button onClick={serviceNavigate} variant='outline-dark'>I nostri servizi</Button>
        </Card.ImgOverlay>
    </Card>
  )
}
