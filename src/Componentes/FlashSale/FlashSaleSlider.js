import React from 'react';

const FlashSaleSlider = ({product, handleBuyNowButton}) => {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <img style={{height: 'auto', width: '150px', margin: '15px'}} src={product.featuredImage} alt="" />
            </div>
            <div className='col-md-8'>
                <h4>{product.title}</h4>
                <p>{product.description.slice(0, 124)}</p>
                <button onClick={() => handleBuyNowButton(product._id)} className='btn bg-info'>Buy Now</button>
            </div>
        </div>
    );
};

export default FlashSaleSlider;