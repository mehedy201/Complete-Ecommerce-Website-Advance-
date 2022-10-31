import React from 'react';
import './TopNavigation.css'
import { SlCallOut } from 'react-icons/sl';
import { CiShoppingCart } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import {  Badge } from 'antd'
import { useNavigate } from 'react-router-dom';

const TopNavigation = () => {
     // useNavigete from react hooks ----------------------
    const navigate = useNavigate();
    const logoNavigate = () => {
      navigate('/')
    }


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
                         <Badge count={0} showZero size="small">
                            <CiShoppingCart className='navigation_icon ' />
                        </Badge>
                         <CiUser className='navigation_icon'/>
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