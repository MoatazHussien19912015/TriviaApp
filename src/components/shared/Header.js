import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="border-top border-bottom py-4">
      <Container>
        <Navbar.Brand href="#home" className="font"><div className="d-flex"><i className='fas fa-edit' style={{fontSize:'36px'}}></i> Trivia App </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Navbar>
  )
}

export default Header
