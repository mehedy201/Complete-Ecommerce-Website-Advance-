import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';

const StripePay = () => {

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

  console.log('process.env.REACT_APP_stripe_api_key', process.env.REACT_APP_STRIPE_PK)



    return (
        <div className='container'>
          <div className="row my-5">
            <div className="col-md-6">
              <Elements stripe={stripePromise}>
                <CheckOutForm />
              </Elements>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
    );
};

export default StripePay;