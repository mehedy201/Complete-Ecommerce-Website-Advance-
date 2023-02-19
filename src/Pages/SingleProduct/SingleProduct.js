import { Rate, Spin } from 'antd';
import React, { useContext } from 'react';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import { IoMdRemove } from 'react-icons/io';
import { MdOutlineAdd } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './SingleProduct.css'
import OnlyHpLaptop from '../../Componentes/OnlyHpLaptop/OnlyHpLaptop';
import { CART_CONTEXT } from '../../App';
import toast from 'react-hot-toast';

const SingleProduct = () => {

    const {id} = useParams();


    // useNavigate from react hooks
    const navigate = useNavigate();
    const handleBuyButton = () => {
        navigate('/payment-check-out')
    }

    // Context State ____________________________________________________________________
    const {count, setCount, totalPrice, setTotalPrice, setItemCount } = useContext(CART_CONTEXT)
    

    const {data: singleData, isLoading} = useQuery({
        queryKey: ['singleProduct'],
        queryFn: () => fetch(`http://localhost:5000/products/${id}`)
                       .then(res => res.json())
    })
  
    if(isLoading){
      return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }


    // Handle Product increase button --------------------------------------------------
    let productPrice = singleData.price
    
    const handlePlus = () => {
        const plusCount = count + 1;
        setCount(plusCount);
        const newPrice = productPrice * plusCount ;
        setTotalPrice(newPrice)
    }
    // Handle Product decrease button -------------------------------------------------
    const handleMinas = () => {
            console.log(totalPrice)
            if(count < 2){
                return alert('Must you have to buy 1 Product')
            }
            else{
                const minasCount = count - 1;
                const minasPrice = totalPrice - singleData.price;
                setTotalPrice(minasPrice)
                setCount(minasCount);
            }
    }



    // Set Product Local Storage________________________________________________________________
    const addToCart = () => {
        const id = singleData._id;
        const title = singleData.title;
        const description = singleData.description;
        const price = singleData.price;
        const rating = singleData.inputRating;
        const image = singleData.featuredImage;
        const category = singleData.inputCategoryData;
        const brand = singleData.inputBrandData;
        const quantity = count;

        let totalAmount = singleData.price;
        const localStoreData = {id, title, description, price, rating, image, category, brand, quantity, totalAmount}

        let cartProduct;
        const storage = localStorage.getItem('cartProduct')
        if(totalPrice === 0){
            if(storage === null){
                cartProduct = []
                cartProduct.push(localStoreData)
            }else{
                cartProduct = JSON.parse(storage)
                cartProduct.push(localStoreData)
            }
            // cartProduct.push(localStoreData)
            localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
        }else{
            totalAmount = totalPrice;
            if(storage === null){
                cartProduct = []
                cartProduct.push(localStoreData)
            }else{
                cartProduct = JSON.parse(storage)
                cartProduct.push(localStoreData)
            }
            localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
        }


        var getObj = JSON.parse(localStorage.getItem('cartProduct'));
        setItemCount(getObj.length)
        toast.success('Added Your Cart Item!', {
            duration: 3000,
            position: 'top-right'
        });

    }



    return (
        <>
        {/* Header Section -------------------------------- */}
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Single Product Page Main Section ------------------------ */}
                <main className='container my-5'>
                    <div className="row mb-5 align-items-center">
                    <div className="col-md-6 p-4 d-flex justify-content-center">
                        <img className='cart_page_image' src={singleData?.featuredImage} alt="" />
                    </div>
                    <div className="col-md-6 p-4">
                        <small>Brand: <span className='text-info'>{singleData?.inputBrandData}</span></small>
                        <h3>{singleData?.title}</h3>
                        <p>{singleData?.description}</p>
                        <div className='d-md-flex justify-content-start mb-3'>
                            <div>
                                <h5>Price: ${singleData?.price}</h5>
                                <Rate value={singleData?.inputRating} disabled/>
                            </div>
                            <div className='bg-light d-flex ms-md-4 rounded shadow-sm'>
                                <div className='px-3'>
                                    <p className='m-0 text-center fw-bold pt-3'>Quantity</p>
                                    <p className='m-0 text-center'>{count}</p>
                                </div>
                                <div className='px-3'>
                                    <p className='m-0 text-center fw-bold pt-3'>Total Price</p>
                                    <p className='m-0 text-center'>$ {totalPrice === 0 ? singleData?.price : totalPrice}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 mb-4'>
                            <IoMdRemove onClick={() => handleMinas()} className='cart_page_icon text-danger'/>
                            <input value={count} readOnly className='cart_page_input' type="text" />
                            <MdOutlineAdd onClick={() => handlePlus()} className='cart_page_icon text-success'/>
                        </div>
                        <div className='d-flex '>
                            <button onClick={() => addToCart()} className='btn btn-info me-3 fw-semibold text-white'>Add To Cart</button>
                            <button onClick={handleBuyButton} className='btn btn-warning fw-semibold'>Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Laptop Section -------------------------- */}
                <p className='text-center fw-bold fs-5 pt-md-5 pb-4'>Our Recomended Product</p>
                <OnlyHpLaptop></OnlyHpLaptop>
            </main>
        {/* Footer Section ---------------------------------- */}
        <footer className='footer_color mt-4'>
          <FooterSection></FooterSection>
        </footer>
        </>
    );
};

export default SingleProduct;