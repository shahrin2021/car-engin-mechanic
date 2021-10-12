import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const {name, img , price, discription} =props.service;
    return (
        

<div className='col-lg-4 col-md-6 col-12 d-flex justify-content-center'>
    
<Card style={{ width: '18rem', marginBottom:'30px' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {discription}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    
</div>
      

    );
};

export default Service;