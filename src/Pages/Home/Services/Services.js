import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import  firstImg from '../../../images/services/1.jpg'
import Service from '../Service/Service';



const Services = () => {
    const [services , setServices] = useState([]);

    useEffect(()=>{
        fetch('./services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
     
                <div className="container" id="services">

                    <h1 className='text-primary text-center my-5'>Our Services</h1>
                <div className='row'>
                {
                    services.map(service=>( <Service 
                        key={service.id}
                        service={service}></Service>))       
                }
            
            </div>

            </div>
    );
};

export default Services;