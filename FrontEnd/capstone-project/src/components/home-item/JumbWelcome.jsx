import React from 'react';
import { Carousel } from 'react-bootstrap';
import onde from '../../asset/onde.jpg';
import tonalizzante from '../../asset/tonalizzante.jpg';
import acconciatura from '../../asset/acconciatura2.jpg';


export default function JumbWelcome() {
  return (
    <Carousel className='mt-3'>
      <Carousel.Item>
        <img className='d-block w-100' alt='First slide' src={onde} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' alt='Second slide' src={tonalizzante} />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' alt='Third slide' src={acconciatura} />
      </Carousel.Item>
    </Carousel>
  )
}
