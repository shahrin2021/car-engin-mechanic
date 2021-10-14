import React from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const  {serviceId} = useParams()
    return (
        <div id ='booking' className='booking'>
            <p>{serviceId}</p>
           <h2>this is booking</h2> 
        </div>
    );
};

export default Booking;