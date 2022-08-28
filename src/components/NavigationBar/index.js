import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.scss';

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            <Nav.Link href="#pricing">About Me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Hire Me!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
