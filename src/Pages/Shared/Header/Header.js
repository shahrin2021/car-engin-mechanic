import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import useFirebase from '../../../Hook/useFirebase';
import './Header.css'


const Header = () => {
const {user,signInWithGoogle, logOut}= useAuth()
    return (
        <div >
            <>
  <Navbar  sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home">Genius</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    
    <Nav className="ms-auto text-center">
      <Nav.Link href="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services#services">Services</Nav.Link>y
      <Nav.Link as={Link} to="/expart#expart">Exparts</Nav.Link>
      {user.email ?<button onClick={logOut} className='btn btn-light'>Logout</button>:<Nav.Link as={Link} to="/login">login</Nav.Link> }
      
      
      </Nav>
      <Navbar.Text className=" d-block text-center">
        {user.displayName && <h6 className='ms-3 text-danger'><div className='img-area'><img className='profile-img' src={user.photoURL} alt="" /></div> {user.displayName}</h6>}
      </Navbar.Text>
    </Navbar.Collapse>
 
     
 
    </Container>
  </Navbar>

  
</>
        </div>
    );
};

export default Header;