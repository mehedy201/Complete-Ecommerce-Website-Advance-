import React, { useState } from 'react';
import './OrderdOverView.css'
import { IoMdRemove } from 'react-icons/io';
import { MdOutlineAdd } from 'react-icons/md';
import { CloseOutlined } from '@ant-design/icons';

const OrderdOverView = ({cartProduct, cartDeleteHandle}) => {
    // Increase and decress product number ---------------------
    // const [count, setCount] = useState(0)

    // console.log(cartProduct)


    // Handle Product increase button --------------------------
    // const handlePlus = () => {
    //     const plusCount = count + 1;
    //     setCount(plusCount);
    //     setDependencyCount(plusCount)
    // }
    // // Handle Product increase button --------------------------
    // const handleMinas = () => {
    //         if(count < 2){
    //             return alert('Must you buy 1 Product')
    //         }
    //         else{
    //             const minasCount = count - 1;
    //             setCount(minasCount);
    //             setDependencyCount(minasCount)
    //         }
    // }
    return (
        <div className='position-relative'>
        <div className='row pt-2 pb-2 ps-2 pe-5 border order_Component_style my-2'>
            <div className='col-md-7'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img src={cartProduct.image} style={{width: '70px', height: 'auto', padding: '5px', marginRight: '10px'} } alt="" />
                    </div>
                    <div>
                        <h6>{cartProduct.title.slice(0,40)}</h6>
                        <p>$ <span className='fw-bold'>{cartProduct.price}</span></p>
                    </div>
                </div>
            </div>
            <div className='col-md-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='text-center mb-3'>Quantity</p>
                        <p className='text-center mb-1 fw-bold'>{cartProduct.quantity}</p>
                        {/* <div className='d-flex align-items-center order_increase_dicrease'>
                            <IoMdRemove onClick={handleMinas} className='border p-1 fs-4  text-danger increase_cursor_pointer'/>
                            <input readOnly value={count} className='cart_page_input py-0' type="text" />
                            <MdOutlineAdd onClick={handlePlus} className='border p-1 fs-4  text-success increase_cursor_pointer'/>
                        </div> */}
                    </div>
                    <div>
                        <p className='text-center mb-2'>Total Price</p>
                        <p className='text-center mb-1'>$ <span className='fw-bold'>{cartProduct.totalAmount}</span></p>
                    </div>
                </div>
            </div>
        </div>
            <CloseOutlined onClick={() => cartDeleteHandle(cartProduct.id)} className='order_remove_button'/>
        </div>
    );
};

export default OrderdOverView;