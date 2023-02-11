import { Badge, Rate } from 'antd';
import React from 'react';
import './ProductCardComponents.css'

const ProductCardComponents = ({product, handleBuyNowButton}) => {
    return (
        <>
          {
              product.inputCriteriaData === 'Featured' &&
              <Badge.Ribbon text="Featured">
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={product?.featuredImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>{product?.inputBrandData}</small>
                        {product?.title.length > 22 ? <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product.title.slice(0,22)}..</h5> : <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product?.title}</h5>}
                        <p className='mb-0 text-info fw-semibold'>{product.price}</p>
                        <Rate value={product?.inputRating} disabled/>
                        <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                    </div>
                </div>
                </Badge.Ribbon>
          }
          {
              product.inputCriteriaData === 'Top Rated' &&
              <Badge.Ribbon text="Top Rated" color='pink'>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={product?.featuredImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>{product?.inputBrandData}</small>
                        {product?.title.length > 22 ? <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product.title.slice(0,22)}..</h5> : <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product?.title}</h5>}
                        <p className='mb-0 text-info fw-semibold'>{product.price}</p>
                        <Rate value={product?.inputRating} disabled/>
                        <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                    </div>
                </div>
                </Badge.Ribbon>
          }
          {
              product.inputCriteriaData === 'Best Saleing' &&
              <Badge.Ribbon  text="Best Saleing" color='green'>
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={product?.featuredImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>{product?.inputBrandData}</small>
                        {product?.title.length > 22 ? <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product.title.slice(0,22)}..</h5> : <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product?.title}</h5>}
                        <p className='mb-0 text-info fw-semibold'>{product.price}</p>
                        <Rate value={product?.inputRating} disabled/>
                        <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                    </div>
                </div>
                </Badge.Ribbon>
          }
          {
              product.inputCriteriaData === 'Flash Sale' &&
              <Badge.Ribbon text="Flash Sale">
                <div className="product_border_top overflow-hidden rounded shadow-sm">
                    <div className='d-flex justify-content-center'>
                        <img className='hompage_product_image_size p-1' src={product?.featuredImage} alt="" />
                    </div>
                    <div className='px-4 pb-4'>
                        <small>{product?.inputBrandData}</small>
                        <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product?.title}</h5>
                        <p className='mb-0 text-info fw-semibold'>{product.price}</p>
                        <Rate value={product?.inputRating} disabled/>
                        <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                    </div>
                </div>
                </Badge.Ribbon>
          }
        </>
    );
};

export default ProductCardComponents;