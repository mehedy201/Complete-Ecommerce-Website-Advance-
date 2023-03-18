import { Popover } from 'antd';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import image from '../../Images/shop_logo.png'

const Navigation = () => {

  const content = (
    <div className='row'>
      <div className='col-md-6'>
        <img className='navigation_image' src={image} alt="" />
      </div>
      <div className='col-md-6'>
        <Link to={'/laptop'} className='fw-normal hover_dropdown_link text-dark  d-block px-2 py-1'>Laptop</Link>
        <Link to={'/smartPhone'} className='fw-normal hover_dropdown_link text-dark d-block px-2 py-1'>Smart Phone</Link>
        <Link to={'/headPhone'} className='fw-normal hover_dropdown_link text-dark d-block px-2 py-1'>Headphones</Link>
        <Link to={'/camera'} className='fw-normal hover_dropdown_link text-dark d-block px-2 py-1'>Camera</Link>
      </div>
    </div>
  );
 
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Link to={'/'} className='fs-6 fw-semibold text-white pe-3 py-2 for_hover_style'>Home</Link>
                      <Popover content={content} >
                        <Link to={''} className='fs-6 fw-semibold text-white pe-3 py-2 for_hover_style'>Shop</Link>
                      </Popover>
                      <Link to={'/about-us'} className='fs-6 fw-semibold text-white pe-3 py-2 for_hover_style'>About Us</Link>
                      <Link to={'/contact-us'} className='fs-6 fw-semibold text-white pe-3 py-2 for_hover_style'>Contact US</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;