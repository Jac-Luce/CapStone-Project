import React from 'react';
import animali from '../../asset/animali.jpg';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ServHome() {
    const navigate = useNavigate();

    const serviceNavigate = () => {
        navigate('/services');
    };

  return (
    <Card>
        <Card.Img src={animali} alt='Service image'/>
        <Card.ImgOverlay>
            <Button onClick={serviceNavigate} variant='outline-dark'>I nostri servizi</Button>
        </Card.ImgOverlay>
    </Card>
  )
}
