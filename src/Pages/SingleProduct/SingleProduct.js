import { Rate } from 'antd';
import React, { useState } from 'react';
import OnlyHpLaptop from '../../Componentes/OnlyHpLaptop/OnlyHpLaptop';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import mobileImage from '../../Images/Iphone14.jpg'
import { IoMdRemove } from 'react-icons/io';
import { MdOutlineAdd } from 'react-icons/md';

const SingleProduct = () => {
   
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
    return (
        <>
        {/* Header Section -------------------------------- */}
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Single Product Page Main Section ------------------------ */}
            <main className='container my-5'>
                <div className="row mb-5">
                    <div className="col-md-6 p-4">
                        <img className='cart_page_image' src={mobileImage} alt="" />
                    </div>
                    <div className="col-md-6 p-4">
                        <small>Brand: <span className='text-info'>Apple</span></small>
                        <h3>Iphone 14 pro max</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, natus a eos quod ullam error quisquam aperiam excepturi voluptatum totam!</p>
                        <h5>Price: $1000</h5>
                        <Rate value={5}/>
                        <div className='mt-2 mb-4'>
                            <IoMdRemove onClick={handleMinas} className='cart_page_icon text-danger'/>
                            <input value={count} className='cart_page_input' type="text" />
                            <MdOutlineAdd onClick={handlePlus} className='cart_page_icon text-success'/>
                        </div>
                        <div className='d-flex '>
                            <button className='btn btn-info me-3 fw-semibold text-white'>Add To Cart</button>
                            <button className='btn btn-warning fw-semibold'>Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* Laptop Section -------------------------- */}
                <h4 className='text-center pt-md-5 pb-4'>Our Recomended Product</h4>
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