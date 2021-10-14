import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Expart = ({expart}) => {
    const {name, img , exparts} = expart;
    return (
        <div  className="col-lg-4 col-md-6 col-12" id='expart'>
            <Card style={{ width: '18rem',marginBottom:'30px' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {exparts}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Expart;