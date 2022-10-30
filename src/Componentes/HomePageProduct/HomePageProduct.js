import React from 'react';
import './HomePageProduct.css';
import laptopImage from '../../Images/Hp-removebg-preview.png'
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomePageProduct = () => {
    // useNavigate hook From React -------------------------
    const navigate = useNavigate();
    const handleBuyNowButton = () => {
        navigate('/cart')
    }


    return (
        <div className='container'>
            <div className='d-flex mt-5'>
                <h5 className='me-4 mb-0'>Featured</h5>
                <h5 className='me-4 mb-0'>Best Saleing</h5>
                <h5 className='me-4 mb-0'>Top Rated</h5>
            </div>
            <hr />
            <div className="for_grid mt-5">
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>HP</small>
                        <h5 className='mb-1'>Laptop</h5>
                        <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                        <Rate value={5} />
                        <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default HomePageProduct;