import { Divider } from 'antd';
import React from 'react';

const PaymentSummary = () => {
    return (
        <div className='border p-4 bg-light'>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-normal'>Total Product Price</h6>
                <p className='fw-bold'>$<span>100</span></p>
            </div>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-normal'>Vat</h6>
                <p className='fw-bold'>$<span>5%</span></p>
            </div>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-normal mb-0'>Shipping Charge</h6>
                <p className='fw-bold mb-0'>$<span>10</span></p>
            </div>
            <Divider className='mt-1 mb-2'/>
            <div className='d-flex justify-content-between'>
                <h6>Total Price</h6>
                <p className='fw-bold'>$<span>150</span></p>
            </div>
        </div>
    );
};

export default PaymentSummary;