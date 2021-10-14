import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Expart from './Expart';




const Exparts = () => {
    const [ exparts, setExparts] = useState([]);
    useEffect(()=>{
        fetch('./Mechanic.json')
        .then(res=> res.json())
        .then(data=> setExparts(data) )
    },[])

    const handleSearch =(e)=>{
        const searchText = e.target.value;

    }
    return (
        <div>

<div className="container">
    <h2 className='text-success text-center my-5'>Our Mechanic</h2>

   
      
                   <div className="row">
                   {
                       exparts.map(expart=><Expart key = {expart.MITid} expart={expart}></Expart>)

                   }
            
            </div>

   

                
                </div>
            </div>
     
        
             

    );
};

export default Exparts;