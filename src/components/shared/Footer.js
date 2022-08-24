import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-3">
      <Container className="text-center">
      <div className="d-inline-flex">
      <p className="mr-1">Copyright © 2022 by Trivia App</p>
      <p>All rights reserved.</p>
      </div>
      <br/>
      <div className="d-inline-flex">
        <a href="" className="mx-2">Terms of Service</a> 
        <a href="" className="mx-2">Privacy Policy</a> 
        <a href="" className="mx-2">Admin</a>
      </div>
      </Container>
    </footer>
  )
};

export default Footer;
