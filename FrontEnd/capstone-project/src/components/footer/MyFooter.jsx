import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from '../../asset/logo.png';
import './style.css';

export default function MyFooter() {
  return (
    <footer style={{paddingTop: 50, paddingBottom: 50}}>
        <Container>
          <Row className='mb-5'>
            <Col>
              <div>
                <img className='logoFooter' alt='logoimage' src={logo} />
                {' '} <span className='logoNameFooter'>Hair Beauty Salon</span>
              </div>
              <div className='text-center'>
                <p>Via Otranto 18, Roma (RO)</p>
                <p>info@hairbeautysalon.com</p>
                <p>Tel. 0832457891</p>
              </div>
              <div className='text-center'>
                <Button variant='link'>
                  <FaFacebook />
                </Button>
                <Button variant='link'>
                    <FaInstagram />
                </Button>
                <Button variant='link'>
                    <FaTwitter />
                </Button>
                <Button variant='link'>
                    <FaYoutube />
                </Button>
              </div>
            </Col>
            <Col>
              <div style={{marginTop: '90px'}} className='text-center'>
                <p><Button variant='link' style={{color: 'gray', fontSize: 'small'}}>Informativa sulla privacy</Button></p>
                <p><Button variant='link' style={{color: 'gray', fontSize: 'small'}}>Informativa sui cookie</Button></p>
                <p><Button variant='link' style={{color: 'gray', fontSize: 'small'}}>Termini e condizioni</Button></p>
              </div>  
            </Col>
            <Col>
              <div style={{marginTop: '90px'}} className='text-center'>
                <p><Button variant='link' style={{color: 'gray', fontSize: 'small'}}>Store locator</Button></p>
                <p><Button variant='link' style={{color: 'gray', fontSize: 'small'}}>Lavora con noi</Button></p>
                <p><Button variant='link' style={{color: 'gray', fontSize: 'small'}}>Chi siamo</Button></p>
              </div>
            </Col>
          </Row>
        © Capstone Project | Developed for homework projects.
        </Container>
    </footer>
  )
}
