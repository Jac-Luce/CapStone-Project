import React from 'react';
import { Container } from 'react-bootstrap';
import './stylePres.css';

export default function Presentation() {
  return (
    <Container fluid className='text-center mt-5'>
      <div className='mb-5'>
        <div className='welcomeP mb-3 mx-5 px-5'>
          <p className='fontP text-black-50'>BENVENUTI NELLA BELLEZZA</p>
          <hr />
          <h3 className='salonName'>Hair Beauty Salon</h3>
        </div>
      </div>
      <div className='mb-5 fs-4'>
        <p>La bellezza è una qualità dell'anima, risultato di delicati equilibri.</p>
        <p>E' il frutto di intrecci tra elementi diversi che incontrandosi danno vita a qualcosa di unico e meraviglioso.</p>
      </div>
      <div className='mb-5 pt-4'>
        <p className='mb-0 textHome'>Ambiente moderno, luminoso e all'avanguardia.</p>
        <p className='mb-4 textHome'>Hair studio specializzato in colorazioni e personalizzazioni di Hairlook.</p>
        <p className='text-black-50 textProd'>Attrezzature e prodotti utilizzati: GHD, Parlux, L'Oreal Professionel, Kerastase, Medavita.</p>
      </div>  
        
    </Container>
  )
}
