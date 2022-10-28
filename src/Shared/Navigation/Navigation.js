import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link className='fs-6 fw-semibold text-white'>Home</Nav.Link>
                      <Nav.Link className='fs-6 fw-semibold text-white'>Shop</Nav.Link>
                      <NavDropdown className="fs-6 fw-semibold text-white" title="Man Fasion" id="collasible-nav-dropdown">
                        <NavDropdown.Item className='fs-6 text-dark'>Demo 1</NavDropdown.Item>
                        <NavDropdown.Item className='fs-6 text-dark'>Demo 2</NavDropdown.Item>
                        <NavDropdown.Item className='fs-6 text-dark'>Demo 3</NavDropdown.Item>
                        <NavDropdown.Item className='fs-6 text-dark'>Demo link</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link className='fs-6 fw-semibold text-white'>About Us</Nav.Link>
                      <Nav.Link className='fs-6 fw-semibold text-white'>Contact US</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;