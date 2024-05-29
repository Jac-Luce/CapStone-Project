import React from 'react';
import avatar from '../../asset/avatar.jpg';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ProdHome() {
    const navigate = useNavigate();
    
    const productNavigate = () => {
        navigate('/products');
    };
  return (
    <Card>
        <Card.Img src={avatar} alt='Product image'/>
        <Card.ImgOverlay>
            <Button onClick={productNavigate} variant='outline-dark'>I nostri Prodotti</Button>
        </Card.ImgOverlay>
    </Card>
  )
}
