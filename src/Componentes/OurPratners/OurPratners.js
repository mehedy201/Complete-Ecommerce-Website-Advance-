import React from 'react';
import './OurPratners.css'
import payPal from '../../Images/brands-logo/Paypal-logo.png'
import walMart from '../../Images/brands-logo/walmart.png'
import mirosoft from '../../Images/brands-logo/microsoft-logo-4.png'
import google from '../../Images/brands-logo/google_PNG19642.png'
import amazon from '../../Images/brands-logo/Amazon_logo.svg.png'
import nike from '../../Images/brands-logo/nike_PNG5.png'

const OurPratners = () => {
    return (
        <div className='container my-5'>
            <h4 className='text-center pt-4'>Our Partners</h4>
            <div className="row align-items-center px-4 pb-4">
                <div className="col-md-2 col-sm-4 border-end p-2 border-start"><img className='brand_image' src={payPal} alt="" /></div>
                <div className="col-md-2 col-sm-4 border-end p-2"><img className='brand_image' src={walMart} alt="" /></div>
                <div className="col-md-2 col-sm-4 border-end p-2"><img className='brand_image' src={mirosoft} alt="" /></div>
                <div className="col-md-2 col-sm-4 border-end p-2"><img className='brand_image' src={google} alt="" /></div>
                <div className="col-md-2 col-sm-4 border-end p-2"><img className='brand_image' src={amazon} alt="" /></div>
                <div className="col-md-2 col-sm-4 border-end p-2"><img className='brand_image' src={nike} alt="" /></div>
            </div>
        </div>
    );
};

export default OurPratners;