import { Rate, Spin } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import { IoMdRemove } from 'react-icons/io';
import { MdOutlineAdd } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './SingleProduct.css'
import OnlyHpLaptop from '../../Componentes/OnlyHpLaptop/OnlyHpLaptop';

const SingleProduct = () => {

    const {id} = useParams();

    // useNavigate from react hooks
    const navigate = useNavigate();
    const handleBuyButton = () => {
        navigate('/payment-check-out')
    }
   
    // Increase and decress product number ----------------------------------------------
    const [count, setCount] = useState(1)

    // Handle Product increase button --------------------------------------------------
    const handlePlus = () => {
        const plusCount = count + 1;
        setCount(plusCount);
    }
    // Handle Product increase button -------------------------------------------------
    const handleMinas = () => {
            if(count < 2){
                return alert('Must you buy 1 Product')
            }
            else{
                const minasCount = count - 1;
                setCount(minasCount);
            }
    }

    const {data,  isLoading} = useQuery({
        queryKey: ['featuredProduct'],
        queryFn: () => fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
    })
  
    let loadingElement;
    if(isLoading){
      return  loadingElement = <Spin/>
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
                {loadingElement}
                <div className="row mb-5 align-items-center">
                    <div className="col-md-6 p-4">
                        <img className='cart_page_image' src={data?.featuredImage} alt="" />
                    </div>
                    <div className="col-md-6 p-4">
                        <small>Brand: <span className='text-info'>{data?.inputBrandData}</span></small>
                        <h3>{data?.title}</h3>
                        <p>{data?.description}</p>
                        <h5>Price: ${data?.price}</h5>
                        <Rate value={data?.inputRating} disabled/>
                        <div className='mt-2 mb-4'>
                            <IoMdRemove onClick={handleMinas} className='cart_page_icon text-danger'/>
                            <input value={count} readOnly className='cart_page_input' type="text" />
                            <MdOutlineAdd onClick={handlePlus} className='cart_page_icon text-success'/>
                        </div>
                        <div className='d-flex '>
                            <button className='btn btn-info me-3 fw-semibold text-white'>Add To Cart</button>
                            <button onClick={handleBuyButton} className='btn btn-warning fw-semibold'>Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Laptop Section -------------------------- */}
                <p className='text-center pt-md-5 pb-4'>Our Recomended Product</p>
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