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
                      <Link to={'/'} className='fs-6 fw-semibold text-white pe-3 py-2'>Home</Link>
                      <Link to={'/shop'} className='fs-6 fw-semibold text-white pe-3 py-2'>Shop</Link>
                      <NavDropdown className="fs-6 fw-semibold text-white pe-3 py-2" title="Man Fasion" id="collasible-nav-dropdown">
                        <Link to={'demo-1'} className='fw-normal hover_dropdown_link text-dark  d-block px-2 py-1'>Demo 1</Link>
                        <Link to={'/demo2'} className='fw-normal hover_dropdown_link text-dark d-block px-2 py-1'>Demo 2</Link>
                        <Link to={'/demo3'} className='fw-normal hover_dropdown_link text-dark d-block px-2 py-1'>Demo 3</Link>
                        <Link to={'/demo4'} className='fw-normal hover_dropdown_link text-dark d-block px-2 py-1'>Demo link</Link>
                      </NavDropdown>
                      <Link to={'/about'} className='fs-6 fw-semibold text-white pe-3 py-2'>About Us</Link>
                      <Link to={'/contact'} className='fs-6 fw-semibold text-white pe-3 py-2'>Contact US</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;