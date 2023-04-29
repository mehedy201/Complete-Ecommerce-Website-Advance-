import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import paymentImage from '../../../Images/paymentlogo.jpeg'
import cardImage from '../../../Images/cardlogo (1).png'
import FooterSection from '../../../Shared/FooterSection/FooterSection';

const StripePay = () => {

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

  const orderdData = JSON.parse(localStorage.getItem('orderdData'));
  const {newPrice} = orderdData;



    return (
      <>
        <div className='container'>
          <div className="row my-5 align-items-center">
            <div className="col-md-6">
                  <div className='mb-3'>
                   <h5>Total Amount: ${newPrice? newPrice : 0}</h5>
                   <p>Please provide Stripe Demo Card information and pay</p>
                  </div>
                  <img className='mb-3' style={{height: 'auto', width: '100%'}} src={cardImage} alt="" />
                  <Elements stripe={stripePromise}>
                    <CheckOutForm />
                  </Elements>
            </div>
            <div className="col-md-6">
              <div className='d-flex justify-content-center align-items-center'>
                <img style={{height: '300px', width: 'auto'}} src={paymentImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Section ---------------------------------------------------------- */}
        <footer  className='footer_color mt-4'>
            <FooterSection></FooterSection>
        </footer>
      </>
    );
};

export default StripePay;