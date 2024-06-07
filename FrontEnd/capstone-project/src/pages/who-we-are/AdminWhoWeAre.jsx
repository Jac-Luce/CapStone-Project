import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import chisiamo from '../../asset/chisiamo.jpg';
import piega from '../../asset/piega.jpg';
import bionda from '../../asset/bionda.jpg';
import taglio from '../../asset/taglio.jpg';
import AdminNavbar from '../../components/admin/AdminNavbar.jsx';

export default function AdminWhoWeAre() {
  return (
    <>
    <AdminNavbar />
    <Container fluid className='mt-5 pt-5'>
        
        <Card>
            <Card.Img src={chisiamo} alt='Who we are image'/>
            <Card.ImgOverlay>
                Passione e Arte da sempre all'avanguardia
            </Card.ImgOverlay>
        </Card>
        <Row>
            <Col>
                <div>
                    <p className='text-black-50'>GARANZIA DI QUALITA'</p>
                    <hr />
                    <p>Bellezza e benessere sono diritti di tutti e noi abbiamo il dovere di garantirli.</p>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <CardGroup>
                                <Card>
                                    <Card.Img src={piega} alt='piega' />
                                </Card>
                                <Card>
                                    <Card.Img src={bionda} alt='bionda' />
                                </Card>
                                <Card>
                                    <Card.Img src={taglio} alt='taglio' />
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <p>Bellezza interiore ed esteriore dialogano di continuo, in una sintesi ininterrota di spirito e fisicità.</p>
                    <p>Il nostro obiettivo è proprio quello di garantirvi il successo dei nostri trattamenti e far comunicare la bellezza interiore con quella esteriore.</p>
                    <p>Se ci sentiremo belle internamente, lo saremo senz'altro anche all'esterno.</p>
                </div>
            </Col>
        </Row>
        
    </Container>
    </>
  )
}
