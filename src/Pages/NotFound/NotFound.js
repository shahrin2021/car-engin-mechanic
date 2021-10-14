import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import notFountImg from '../../images/page-not-found-404-error-600w-211334284.webp'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center ' style={{height:'100vh'}}>
            <div>
                <img src={notFountImg} alt="" />
               <div style={{textAlign:'center'}} >
               <NavLink style={{textDecoration:'none',fontSize:'20px'}} to='/'>go to home page</NavLink>
               </div>
            </div>
        </div>
    );
};

export default NotFound;