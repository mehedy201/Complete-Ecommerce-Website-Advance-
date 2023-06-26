import React, { useEffect, useState } from 'react';
import FooterSection from '../../../Shared/FooterSection/FooterSection';
import ShopProduct from '../../ShopPage/ShopProduct/ShopProduct';
import { BsArrowRight } from 'react-icons/bs';
import { Spin } from 'antd';

const GamingPage = () => {
    // Props for Product Page left side components ---------------------------
    const [product, setProduct] = useState([]);
    const [newData, setNewData] = useState([])

    let isLoading = false;
    useEffect(() => {
        isLoading = true;
        fetch('https://ecommerce-shop-yshv.onrender.com/category/Drone')
        .then(res => res.json())
        .then(data => {
            isLoading = false;
            setProduct(data)
            setNewData(data)
        })
    },[])

    if(isLoading){
        return <Spin/>;
    }

    const uniques = {}
    for (const d of product) {
      const key = d.inputBrandData 
      uniques[key] = d                    
    }
    const uniqueThing = Object.values(uniques)

    const filterHandle = (value) => {
        const remain = product.filter(item => item.inputBrandData === value);
        setNewData(remain)
    }
    
    const filterAll = () => {
        setNewData(product)
    }
    
    

    return (
        <>
        {/* Main Section Laptop Page ---------------------------------------- */}
            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-3">
                        <div  className='shadow-sm rounded p-md-4 sticky-top'>
                        <h2 className='text-secondary fs-5'>Drone Brands...</h2>
                        <hr />
                        <p onClick={() => filterAll()} className='fw-bold py-2 px-4 shadow-sm my-1 d-block rounded for_cursor_pointer'>All<BsArrowRight className='hero_animeted_icon'/></p>
                            {
                                uniqueThing.map(brandName => <p onClick={() => filterHandle(brandName.inputBrandData)} key={brandName._id} className='fw-bold py-2 px-4 shadow-sm my-1 d-block rounded for_cursor_pointer'>{brandName.inputBrandData}<BsArrowRight className='hero_animeted_icon'/></p>)
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="shop_page_grid my-4">
                            {
                                newData.map(product => <ShopProduct key={product._id} product={product}></ShopProduct>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        {/* Footer Section ---------------------------------------------------------- */}
        <footer  className='footer_color mt-4'>
            <FooterSection></FooterSection>
        </footer>
        </>
    );
};

export default GamingPage;