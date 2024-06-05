import React from 'react';
import { Container } from 'react-bootstrap';
import './stylePres.css';

export default function Presentation() {
  return (
    <Container fluid className='text-center mt-5'>
      <div className='mb-5 pb-3'>
        <div className='welcomeP mb-3 mx-5 px-5'>
          <p className='fontP text-black-50'>BENVENUTI NELLA BELLEZZA</p>
          <hr />
          <h3>Hair Beauty Salon</h3>
        </div>
      </div>
      <div className='mb-5'>
        <p className=''>Ambiente moderno, luminoso e all'avanguardia.</p>
        <p>Hair studio specializzato in colorazioni e personalizzazioni di Hairlook.</p>
        <p className='text-muted'>Marche e prodotti utilizzati: L'Oreal Professionel, Kerastase, Medavita.</p>
      </div>  
        
    </Container>
  )
}
