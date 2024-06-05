import React from 'react';
import { Carousel } from 'react-bootstrap';
import onde from '../../asset/onde.jpg';
import tonalizzante from '../../asset/tonalizzante.jpg';
import acconciatura from '../../asset/acconciatura2.jpg';


export default function JumbWelcome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' alt='First slide' src={onde} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' alt='Second slide' src={tonalizzante} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' alt='Third slide' src={acconciatura} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
