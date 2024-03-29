import React, { useEffect, useState } from 'react';
import FooterSection from '../../../Shared/FooterSection/FooterSection';
import ShopProduct from '../../ShopPage/ShopProduct/ShopProduct';
import { BsArrowRight } from 'react-icons/bs';
import { Spin } from 'antd';

const SmartPhonePage = () => {
 

    const [product, setProduct] = useState([]);
    const [newData, setNewData] = useState([])

    let isLoading = false;
    useEffect(() => {
        isLoading = true;
        fetch('https://complete-ecommerce-shop-server.vercel.app/products/category/SmartPhone')
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
    for (const t of product) {
      const key = t.inputBrandData 
      uniques[key] = t                    
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
                        <h2 className='text-secondary fs-5'>Smart Phone Brands...</h2>
                        <hr />
                         <p onClick={() => filterAll()} className='for_cursor_pointer fw-bold py-2 px-4 shadow-sm my-1 d-block rounded'>All<BsArrowRight className='hero_animeted_icon'/></p>
                            {
                                uniqueThing.map(brandName => <p onClick={() => filterHandle(brandName.inputBrandData)} key={brandName._id} className='for_cursor_pointer fw-bold py-2 px-4 shadow-sm my-1 d-block rounded'>{brandName.inputBrandData}<BsArrowRight className='hero_animeted_icon'/></p>)
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

export default SmartPhonePage;