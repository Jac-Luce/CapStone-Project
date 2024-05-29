import React from 'react';
import { Container } from 'react-bootstrap';

export default function Presentation() {
  return (
    <Container fluid='sm'  className='text-center mt-5'>
        <h3 className='mx-3 px-3 mt-3 pt-3'>Luce Parrucchieri</h3>
        <p className='m-3 px-3 pb-3'>Ambiente moderno, luminoso e all'avanguardia.</p>
        <p>Hair studio specializzato in colorazioni e personalizzazioni di Hairlook.</p>
        <p className='text-muted'>Marche e prodotti utilizzati: L'Oreal Professionel, Kerastase, Medavita.</p>
    </Container>
  )
}
