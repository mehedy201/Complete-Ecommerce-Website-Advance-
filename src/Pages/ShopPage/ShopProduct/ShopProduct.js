import { Rate } from 'antd';
import React from 'react';
import laptopImage from '../../../Images/Hp-removebg-preview.png'

const ShopProduct = () => {
    return (
        <>
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
        </>
    );
};

export default ShopProduct;