import { Rate } from 'antd';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { CART_CONTEXT } from '../../../App';
import toast from 'react-hot-toast';




const ShopProduct = ({product}) => {

    const navigate = useNavigate();
    const handleBuyNowButton = (id) => {
        navigate(`/single-product/${id}`)
    }

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
            <div className="product_border_top overflow-hidden rounded shadow-sm">
                <div className='d-flex justify-content-center'>
                    <img className='hompage_product_image_size p-1' src={product.featuredImage} alt="" />
                </div>
                <div className='px-4 pb-4'>
                    <small>{product.inputBrandData}</small>
                    {product?.title.length > 22 ? <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product.title.slice(0,22)}..</h5> : <h5 onClick={() => handleBuyNowButton(product._id)} className='mb-1 for_pointer'>{product?.title}</h5>}
                    <p className='mb-0 text-info fw-semibold'>Price: ${product.price}</p>
                    <Rate value={product.inputRating} disabled/>
                    <div className='d-flex justify-content-between align-items-center'>
                        <button onClick={() => handleBuyNowButton(product._id)} className='btn btn-sm bg-warning mt-2 d-block fw-bold'>Buy Now</button>
                        <BsCartPlus onClick={() => handleCartIcon(product)} className='card_cart_icon'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopProduct;