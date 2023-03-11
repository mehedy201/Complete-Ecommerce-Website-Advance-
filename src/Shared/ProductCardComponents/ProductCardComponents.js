import { Badge, Rate } from 'antd';
import React, { useContext } from 'react';
import './ProductCardComponents.css'
import { BsCartPlus } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { CART_CONTEXT } from '../../App';




const ProductCardComponents = ({product, handleBuyNowButton}) => {

    // setCount, setTotalPrice, itemCount, 

    // Context State ____________________________________________________________________
    const {count, totalPrice, setItemCount } = useContext(CART_CONTEXT)


    const handleCartIcon = (singleData) => {
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
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                            <BsCartPlus onClick={() => handleCartIcon(product)} className='card_cart_icon'/>
                        </div>
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
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                            <BsCartPlus className='card_cart_icon'/>
                        </div>
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
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                            <BsCartPlus className='card_cart_icon'/>
                        </div>
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
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                            <BsCartPlus className='card_cart_icon'/>
                        </div>
                    </div>
                </div>
                </Badge.Ribbon>
          }
        </>
    );
};

export default ProductCardComponents;