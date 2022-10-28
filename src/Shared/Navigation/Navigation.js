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
                      <Nav.Link><Link className='fs-6 fw-semibold text-white' to='/'>Home</Link></Nav.Link>
                      <Nav.Link><Link className='fs-6 fw-semibold text-white' to='/'>Shop</Link></Nav.Link>
                      <NavDropdown className="fs-6 fw-semibold text-white" title="Man Fasion" id="collasible-nav-dropdown">
                        <NavDropdown.Item><Link className='fs-6 text-dark' to='/'>Demo 1</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className='fs-6 text-dark' to='/'>Demo 2</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className='fs-6 text-dark' to='/'>Demo 3</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link className='fs-6 text-dark' to='/'>Demo link</Link></NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link><Link className='fs-6 fw-semibold text-white' to='/'>About Us</Link></Nav.Link>
                      <Nav.Link><Link className='fs-6 fw-semibold text-white' to='/'>Contact US</Link></Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;