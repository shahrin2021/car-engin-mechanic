import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <Container>
            <Row>
                <Col lg={5} md={6} sm={12} className=' d-flex justify-content-center align-items-center'>
                <div >
               <div className='text-center'>
               <h2 style={{color:'hsl(155, 72%, 54%)'}}>About us</h2>
                    <p className='text-white'>Transportation product and service businesses are being disrupted by digital platforms that move people from point A to B in new ways. Car ownership is giving way to on-demand urban transportation services, and transportation services continue to feel the effects of online price aggregators. Enterprises must embrace these changes and adapt to meet consumer needs to survive and thrive. 

                    </p>
               </div>
                </div>
                
                </Col >
                <Col lg={7} md={6} sm={12} className=' d-flex justify-content-center align-items-center'>
                <Row>
                    <Col lg={3} md={2} sm={6}className=' d-flex justify-content-center align-items-center'>
                        <div  >
                    <ul className="list_items text-center text-white">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Expart</li>
                    </ul>
                    </div>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                    <div className='contact-footer text-center'>
                        <ul className="list_items text-white">
                            <li>Phone:01796795850</li>
                            <li>Email:shahrin58501@gmail.com</li>
                        </ul>
                    </div>
                    </Col>
                </Row>
                
                
                </Col>
                
            </Row>

            </Container>
            
        </div>
    );
};

export default Footer;