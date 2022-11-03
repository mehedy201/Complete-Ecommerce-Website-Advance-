import React, { useState } from 'react';
import headPhoneImage from '../../../Images/headphones.jpg'
import './OrderdOverView.css'
import { IoMdRemove } from 'react-icons/io';
import { MdOutlineAdd } from 'react-icons/md';
import { CloseOutlined } from '@ant-design/icons';

const OrderdOverView = () => {
    // Increase and decress product number ---------------------
    const [count, setCount] = useState(1)

    // Handle Product increase button --------------------------
    const handlePlus = () => {
        const plusCount = count + 1;
        setCount(plusCount);
    }
    // Handle Product increase button --------------------------
    const handleMinas = () => {
            if(count < 2){
                return alert('Must you buy 1 Product')
            }
            else{
                const minasCount = count - 1;
                setCount(minasCount);
            }
    }
    return (
        <div className='pt-2 pb-2 ps-2 pe-5 border d-flex align-items-center justify-content-between order_Component_style my-2'>
            <div className='d-flex align-items-center'>
                <div>
                    <img src={headPhoneImage} style={{width: '70px', height: 'auto', padding: '5px', marginRight: '10px'} } alt="" />
                </div>
                <div>
                    <h6>Product Title</h6>
                    <p>$ <span className='fw-bold'>10</span></p>
                </div>
            </div>
            <div>
                <p className='text-center mb-3'>Quantity</p>
                <div className='d-flex align-items-center order_increase_dicrease'>
                    <IoMdRemove onClick={handleMinas} className='border p-1 fs-4  text-danger increase_cursor_pointer'/>
                    <input readOnly value={count} className='cart_page_input py-0' type="text" />
                    <MdOutlineAdd onClick={handlePlus} className='border p-1 fs-4  text-success increase_cursor_pointer'/>
                </div>
            </div>
            <div>
                <p className='text-center mb-2'>Total Price</p>
                <p className='text-center mb-1'>$ <span className='fw-bold'>111</span></p>
            </div>
            <CloseOutlined className='order_remove_button'/>
        </div>
    );
};

export default OrderdOverView;