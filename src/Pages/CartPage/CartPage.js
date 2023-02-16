import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import OrderdOverView from '../PaymentCheckOut/OrderdOverView/OrderdOverView';
import PaymentSummary from '../PaymentCheckOut/PaymentSummary/PaymentSummary';
import './CartPage.css'


const CartPage = () => {
    // UseNavigate from React hooks -----------------------------------------------------


    const navigate = useNavigate();
    const proceedCheckOut = () => {
        navigate('/payment-check-out')
    }
    // Load Cart Product From LocalStorage______________________________________________
    
    const [cartProductData, setCartProductData] = useState([])
    const [newPrice, setNewPrice] = useState(0)
    const [itemCount, setItemCount] = useState(0)
    

 
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
        setItemCount(cartProductData.length)
        console.log(price)

    }, [cartProductData])


    const cartDeleteHandle = (id) => {
        const deletedCart = cartProductData.filter(cart => {
            return cart.id !== id;
        })
        localStorage.setItem('cartProduct', JSON.stringify(deletedCart));
        setCartProductData(deletedCart)
    }





    return (
        <>
        {/* Header Section -------------------------------- */}
        <header>
            <TopNavigation key={'quantity'} itemCount={itemCount}></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Cart Page Main Section -----------------------= */}
            <div className='container my-5'>
                <div className="row">
                    <h4>Cart Over View</h4>
                    <Divider className='mt-0'/>
                    <div className="col-md-8">
                        {
                            cartProductData && 
                            cartProductData.map(cartProduct => <OrderdOverView key={cartProduct.id} cartProduct={cartProduct} cartDeleteHandle={cartDeleteHandle}/>)
                        }
                    </div>
                    <div className="col-md-4 mt-2">
                        <PaymentSummary key={'1'} newPrice={newPrice}/>
                        <div className='d-flex justify-content-end'>
                            <button onClick={proceedCheckOut} className='bg-info payment_check_out_btn fw-bold mt-3'>Procced to Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        {/* Footer Section ---------------------------------- */}
        <footer className='footer_color mt-4'>
          <FooterSection></FooterSection>
        </footer>
        </>
    );
};

export default CartPage;