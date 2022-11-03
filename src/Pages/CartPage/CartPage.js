import { Divider } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import OrderdOverView from '../PaymentCheckOut/OrderdOverView/OrderdOverView';
import PaymentSummary from '../PaymentCheckOut/PaymentSummary/PaymentSummary';
import './CartPage.css'


const CartPage = () => {
    // UseNavigate from React hooks -----------------------------------------------------
    const navigate = useNavigate();
    const proceedCheckOut = () => {
        navigate('/payment-check-out')
    }



    return (
        <>
        {/* Header Section -------------------------------- */}
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Cart Page Main Section -----------------------= */}
            <div className='container my-5'>
                <div className="row">
                    <h4>Cart Over View</h4>
                    <Divider className='mt-0'/>
                    <div className="col-md-8">
                        <OrderdOverView/>
                    </div>
                    <div className="col-md-4 mt-2">
                        <PaymentSummary/>
                        <div className='d-flex justify-content-end'>
                            <button onClick={proceedCheckOut} className='bg-info payment_check_out_btn fw-bold mt-3'>Procced to Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        {/* Footer Section ---------------------------------- */}
        <footer className='footer_color mt-4'>
          <FooterSection></FooterSection>
        </footer>
        </>
    );
};

export default CartPage;