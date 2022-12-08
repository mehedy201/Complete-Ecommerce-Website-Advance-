import { Divider } from 'antd';
import React from 'react';
import './ManageOrder.css'
import laptop from '../../Images/Hp-removebg-preview.png'
import phone from '../../Images/Iphone14.jpg'
import headphone from '../../Images/headphones.jpg'

const ManageOrder = () => {
    return (
        <div className='container mt-3'>
            <h4>Manage Order</h4>
            <Divider className='mt-2'/>
            <div className='d-flex justify-content-between border mb-1 p-2'>
                <div className='d-flex'>
                    <img src={laptop} className='manage_order_image' alt="" />
                    <h5>Special Laptop</h5>
                </div>
                <div className='d-flex justify-content-between'>
                    <button className='manage_order_button'>Panding</button>
                    <button className='manage_order_button'>Update Status</button>
                </div>
            </div>
            
        </div>
    );
};

export default ManageOrder;