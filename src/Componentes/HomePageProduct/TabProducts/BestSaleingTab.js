import { Badge, Rate } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import laptopImage from '../../../Images/Hp-removebg-preview.png'


const BestSaleingTab = () => {
    // useNavigate hook From React -------------------------
    const navigate = useNavigate();
    const handleBuyNowButton = () => {
        navigate(`/single-product`)
    }
    return (
        <div className="for_grid mt-3">
                <Badge.Ribbon text="Best Saleing" color='green'>
                    <div className="product_border_top overflow-hidden rounded shadow-sm">
                        <div className='d-flex justify-content-center'>
                            <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                        </div>
                        <div className='px-4 pb-4'>
                            <small>HP</small>
                            <h5 className='mb-1'>Laptop</h5>
                            <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                            <Rate value={5} disabled/>
                            <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                        </div>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Best Saleing" color='green'>
                    <div className="product_border_top overflow-hidden rounded shadow-sm">
                        <div className='d-flex justify-content-center'>
                            <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                        </div>
                        <div className='px-4 pb-4'>
                            <small>HP</small>
                            <h5 className='mb-1'>Laptop</h5>
                            <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                            <Rate value={5} disabled/>
                            <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                        </div>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Best Saleing" color='green'>
                    <div className="product_border_top overflow-hidden rounded shadow-sm">
                        <div className='d-flex justify-content-center'>
                            <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                        </div>
                        <div className='px-4 pb-4'>
                            <small>HP</small>
                            <h5 className='mb-1'>Laptop</h5>
                            <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                            <Rate value={5} disabled/>
                            <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                        </div>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Best Saleing" color='green'>
                    <div className="product_border_top overflow-hidden rounded shadow-sm">
                        <div className='d-flex justify-content-center'>
                            <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                        </div>
                        <div className='px-4 pb-4'>
                            <small>HP</small>
                            <h5 className='mb-1'>Laptop</h5>
                            <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                            <Rate value={5} disabled/>
                            <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                        </div>
                    </div>
                </Badge.Ribbon>
                <Badge.Ribbon text="Best Saleing" color='green'>
                    <div className="product_border_top overflow-hidden rounded shadow-sm">
                        <div className='d-flex justify-content-center'>
                            <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                        </div>
                        <div className='px-4 pb-4'>
                            <small>HP</small>
                            <h5 className='mb-1'>Laptop</h5>
                            <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                            <Rate value={5} disabled/>
                            <button onClick={handleBuyNowButton} className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                        </div>
                    </div>
                </Badge.Ribbon>
                
            </div>
    );
};

export default BestSaleingTab;