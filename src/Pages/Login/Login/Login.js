import React from 'react';
import useAuth from '../../../Hook/useAuth';
import useFirebase from '../../../Hook/useFirebase';


const Login = () => {
    const {signInWithGoogle}=useAuth()
    return (
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
            <div className=''>
            <h3>Please Login With google</h3>
            <button onClick={signInWithGoogle} className='btn btn-warning'>Sing in with google</button>
            </div>
           
        </div>
    );
};

export default Login;