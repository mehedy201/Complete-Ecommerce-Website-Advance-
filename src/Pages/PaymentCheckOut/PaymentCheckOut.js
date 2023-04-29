import { Divider, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CART_CONTEXT } from '../../App';
import { auth } from '../../Firebase.init';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import OrderdOverView from './OrderdOverView/OrderdOverView';
import './PaymentCheckOut.css'
import PaymentSummary from './PaymentSummary/PaymentSummary';





const PaymentCheckOut = () => {

    const [user, loading] = useAuthState(auth);
    const {setItemCount } = useContext(CART_CONTEXT);
    const cartProductCount = JSON.parse(localStorage.getItem('cartProduct'));



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

        if(cartProductData){
            cartProductData.map(newProduct => {
                price = price + parseInt(newProduct.price)
                quantity = quantity + parseInt(newProduct.quantity)
            })
        }
        setNewPrice(price)
    }, [cartProductData])


    const cartDeleteHandle = (id) => {
        const deletedCart = cartProductData.filter(cart => {
            return cart.id !== id;
        })
        localStorage.setItem('cartProduct', JSON.stringify(deletedCart));
        let newCount = cartProductCount.length - 1;
        setItemCount(newCount)
        setCartProductData(deletedCart)
    }

    // For React form hooks ------------------------------------------------------
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const email = user.email;
        const orderdData = {data, cartProductData, newPrice, email}
        localStorage.setItem('orderdData', JSON.stringify(orderdData));
        reset();
        navigate('/stripe')
    };

    if(loading){
        return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='d-flex'>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>First Name</span>
                                        <input className='payment_check_out_input' type="text" {...register("firstName", { required: true })} />
                                    </div>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>Last Name</span>
                                        <input className='payment_check_out_input' type="text" {...register("lastName", { required: true })}  />
                                    </div>
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Your Email</span>
                                    <input className='payment_check_out_input' type="email" {...register("email", { required: true })} />
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Phone</span>
                                    <input className='payment_check_out_input' type="text" {...register("phone", { required: true })} />
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Address</span>
                                    <input className='payment_check_out_input' type="text" {...register("address", { required: true })} />
                                </div>
                                <div className='d-flex'>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>Postal Code</span>
                                        <input className='payment_check_out_input' type="text" {...register("postalCode", { required: true })} />
                                    </div>
                                    <div className='w-100 m-2'>
                                        <span className='d-block text-secondary'>City</span>
                                        <input className='payment_check_out_input' type="text" {...register("city", { required: true })} />
                                    </div>
                                </div>
                                <div className='m-2'>
                                    <span className='d-block text-secondary'>Your Comment</span>
                                    <textarea className='payment_check_out_input' type="text" {...register("comment", { required: true })} />
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