import { Divider } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { CART_CONTEXT } from '../../App';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import OrderdOverView from './OrderdOverView/OrderdOverView';
import './PaymentCheckOut.css'
import PaymentSummary from './PaymentSummary/PaymentSummary';





const PaymentCheckOut = () => {

    const {itemCount, setItemCount } = useContext(CART_CONTEXT);

    // Load Cart Product From LocalStorage______________________________________________
    const [cartProductData, setCartProductData] = useState([])
    const [newPrice, setNewPrice] = useState(0);
    
    useEffect( () => {
        const data = JSON.parse(localStorage.getItem('cartProduct'));
        setCartProductData(data)
    },[])


    useEffect(() => {
        let price = 0 ;
        let quantity = 0;

        cartProductData.map(newProduct => {
            price = price + parseInt(newProduct.price)
            quantity = quantity + parseInt(newProduct.quantity)
        })
        setNewPrice(price)
    }, [cartProductData])


    const cartDeleteHandle = (id) => {
        const deletedCart = cartProductData.filter(cart => {
            return cart.id !== id;
        })
        localStorage.setItem('cartProduct', JSON.stringify(deletedCart));
        let newCount = itemCount - 1;
        setItemCount(newCount)
        setCartProductData(deletedCart)
    }

    

    return (
        <>
        {/* Main Section Laptop Page ---------------------------------------- */}
            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-6 pe-4">
                        <h4 className='text-secondary mb-1 fw-normal'>Order Overview</h4>
                        <Divider className='mt-0 mb-4'/>
                        {
                            cartProductData && 
                            cartProductData.map(cartProduct => <OrderdOverView key={cartProduct.id} cartDeleteHandle={cartDeleteHandle} cartProduct={cartProduct}/>)
                        }
                        <h4 className='text-secondary pt-5 mb-1 fw-normal'>Payment Summary</h4>
                        <Divider className='mt-0 mb-4'/>
                        <div className='mx-md-2'>
                            <PaymentSummary key={'payment'} newPrice={newPrice}/>
                        </div>
                    </div>
                    <div className="col-md-6 p-4 shadow-sm">
                        <h4 className='text-secondary text-center mb-1'>Please fill your shiping Information</h4>
                        <Divider className='mt-0 mb-4'/>
                        <div>
                            <form action="">
                                <div className='d-flex'>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>First Name</span>
                                        <input className='payment_check_out_input' type="text" />
                                    </div>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>Last Name</span>
                                        <input className='payment_check_out_input' type="text" />
                                    </div>
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Your Email</span>
                                    <input className='payment_check_out_input' type="text" />
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Phone</span>
                                    <input className='payment_check_out_input' type="text" />
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Address</span>
                                    <input className='payment_check_out_input' type="text" />
                                </div>
                                <div className='d-flex'>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>Postal Code</span>
                                        <input className='payment_check_out_input' type="text" />
                                    </div>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>City</span>
                                        <input className='payment_check_out_input' type="text" />
                                    </div>
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Your Comment</span>
                                    <textarea className='payment_check_out_input' type="text" />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <input className='m-2 payment_check_out_btn bg-info fw-bold' type="submit" value={'Procced To Check Out'} />
                                </div>
                            </form>
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

export default PaymentCheckOut;