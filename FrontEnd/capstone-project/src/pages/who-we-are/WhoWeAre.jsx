import React from 'react';
import MyNavb from '../../components/navbar/MyNavb.jsx';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import chisiamo from '../../asset/chisiamo.jpg';
import piega from '../../asset/piega.jpg';
import bionda from '../../asset/bionda.jpg';
import taglio from '../../asset/taglio.jpg';
import './style.css';

export default function WhoWeAre() {
  return (
    <>
    <MyNavb />
    <Container className='mt-5 pt-5'>
        
        <Card className='mt-3 border-white rounded-0'>
            <Card.Img src={chisiamo} alt='Who we are image' className='rounded-0'/>
            <Card.ImgOverlay className='text-center text-black-50 mt-3 ms-5 fontP text-decoration-underline fw-bold'>
                PASSIONE E ARTE DA SEMPRE ALL'AVANGUARDIA
            </Card.ImgOverlay>
        </Card>
        <Row className='mt-5'>
            <Col>
                <div className='text-center mt-5 mb-5'>
                    <p className='text-black-50 fontP'>GARANZIA DI QUALITA'</p>
                    <hr />
                    <p className='pb-5 fs-4'>Bellezza e benessere sono diritti di tutti e noi abbiamo il dovere di garantirli.</p>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card className='rounded-0 border-white'>
                                <Card.Img src={piega} alt='piega' className='rounded-0' />
                            </Card>
                        </Col>
                        <Col>
                            <Card className='rounde-0 border-white mt-3'>
                                <Card.Img src={bionda} alt='bionda' className='rounded-0' />
                            </Card>
                        </Col>
                        <Col>
                            <Card className='rounded-0 border-white'>
                                <Card.Img src={taglio} alt='taglio' className='rounded-0' />
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className='text-center mt-5 pt-5 mb-5 fs-5'>
                    <h1 className='mb-5 pb-5 ultimoP'>Se ci sentiremo belle internamente, lo saremo senz'altro anche all'esterno.</h1>
                    <p>Bellezza interiore ed esteriore dialogano di continuo, in una sintesi ininterrota di spirito e fisicità.</p>
                    <p>Il nostro obiettivo è proprio quello di garantirvi il successo dei nostri trattamenti e far comunicare la bellezza interiore con quella esteriore.</p>
                </div>
            </Col>
        </Row>
        
    </Container>
    </>
  )
}
