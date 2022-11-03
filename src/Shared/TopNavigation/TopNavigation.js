import React from 'react';
import './TopNavigation.css'
import { Dropdown, Menu, Space } from 'antd'
import { SlCallOut } from 'react-icons/sl';
import { CiShoppingCart } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import {  Badge } from 'antd'
import { Link, useNavigate } from 'react-router-dom';

const TopNavigation = () => {
     // useNavigete from react hooks ----------------------
    const navigate = useNavigate();
    const logoNavigate = () => {
        navigate('/')
    };
    const cartNavigate = () => {
        navigate('/cart')
    }
    // User Icon Dropdown ---------------------------------
    const menu = (
        <Menu
          items={[
            { key: '1', label: ( <Link to={'/sing-in'}>Sing In</Link>),},
            { key: '2', label: ( <Link to={'/sign-up'}>Sign Up</Link>),},
            { key: '3', label: ( <Link to={'/'}>Sign Out</Link>),},
            { key: '4', label: ( <Link to={'/order-history'}>My Order History</Link>),},

          ]}
        />
      );


    return (
        <div className='for_navigation_background sticky-top z-index'>
            <div className='container py-2'>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 onClick={logoNavigate} className='fs-4 fw-bold my-auto for_logo_cursor'>Ecommerce Shop</h1>
                    <div className='for_responsivness_input'>
                        <div className='d-flex rounded-pill overflow-hidden'>
                            <input className='input_design border-0 px-4 py-2' type="text" name="" id="" />
                            <button className='border-0 px-4 py-2 fw-bold'>Search</button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='for_responsivness_call'>
                            <div className='d-flex align-items-center me-5 for_responsivness_call'>
                                <SlCallOut className='navigation_icon p-1'/>
                                <div className='border-start ps-2 border-dark'>
                                    <p className='py-0 my-0 fw-semibold'>Call Us 24/7</p>
                                    <p className='py-0 my-0'>+880 1612013433</p>
                                </div> 
                            </div>
                        </div>
                         <Badge count={1} showZero size="small">
                            <CiShoppingCart onClick={cartNavigate} className='navigation_icon cart_icon_cursor' />
                        </Badge>
                         {/* <CiUser className='navigation_icon'/> */}
                         <Badge count={0} size="small">
                            <Dropdown overlay={menu} placement="bottom" arrow>
                                <Link onClick={(e) => e.preventDefault()}>
                                    <Space>
                                         <CiUser className='navigation_icon'/>
                                    </Space>
                                </Link>
                            </Dropdown>
                        </Badge>
                    </div>
                </div>
                {/* Responsive search option when screen under 668 px -------------------------------------------------------- */}
                <div className='for_responsivness_phone_input'>
                    <div className='d-flex from-group rounded overflow-hidden'>
                        <input className='input_design border-0 px-4 py-2 mobile_input_size' type="text" name="" id="" />
                        <button className='border-0 px-4 py-2 fw-bold mobile_button_size'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;