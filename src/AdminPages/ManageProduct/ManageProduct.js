import { Divider } from 'antd';
import React from 'react';
import './ManageProduct.css'
import headphone from '../../Images/headphones.jpg'

const ManageProduct = () => {
    return (
        <div className='container mt-3'>
            <h6 className='text-secondary mb-0'>List of Product <span className='text-dark'>100</span></h6>
            <Divider className='mt-2'/>
            <div className='d-flex align-items-center justify-content-between p-2 border'>
                <div className='d-flex align-items-center'>
                    <img className='manage_product_img' src={headphone} alt="" />
                    <h5>Special Headphone Title</h5>
                </div>
                <div className='d-flex'>
                    <button className='btn-sm bg-info fw-semibold manage_product_button mx-2'>Preview</button>
                    <button className='btn-sm bg-light fw-semibold manage_product_button mx-2'>Edit</button>
                    <button className='btn-sm bg-danger fw-semibold manage_product_button mx-2'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;