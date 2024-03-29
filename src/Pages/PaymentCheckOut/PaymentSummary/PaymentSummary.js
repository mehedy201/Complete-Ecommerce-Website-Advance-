import { Divider } from 'antd';
import React from 'react';

const PaymentSummary = ({newPrice}) => {


    const percentage = (newPrice / 100) * 5;
    const totalValue = newPrice + percentage + 10;


    return (
        <div className='border p-4 bg-light'>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-normal'>Total Product Price</h6>
                <p className='fw-bold'>$<span>{newPrice}</span></p>
            </div>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-normal'>Vat</h6>
                <p className='fw-bold'>$<span>{newPrice ? '5%' : 0}</span></p>
            </div>
            <div className='d-flex justify-content-between'>
                <h6 className='fw-normal mb-0'>Shipping Charge</h6>
                <p className='fw-bold mb-0'>$<span>{newPrice ? '10' : 0}</span></p>
            </div>
            <Divider className='mt-1 mb-2'/>
            <div className='d-flex justify-content-between'>
                <h6>Total Price</h6>
                <p className='fw-bold'>$<span>{newPrice ? totalValue : 0}</span></p>
            </div>
        </div>
    );
};

export default PaymentSummary;