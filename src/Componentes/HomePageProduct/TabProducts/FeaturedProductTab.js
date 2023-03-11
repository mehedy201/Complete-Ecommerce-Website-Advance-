import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCardComponents from '../../../Shared/ProductCardComponents/ProductCardComponents';


const FeaturedProductTab = () => {
    // useNavigate hook From React -------------------------
    const navigate = useNavigate();
    const handleBuyNowButton = (id) => {
        navigate(`/single-product/${id}`)
    }

    const {data: productData,  isLoading} = useQuery({
        queryKey: ['forTabs'],
        queryFn: () => fetch('http://localhost:5000/products')
        .then(res => res.json())
    })
  
    const matched1 = [];
    let featured;
    if(isLoading){
       return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }else{
        for (let i = 0; i < productData.length; i++) {
            const element = productData[i];
            if(element.inputCriteriaData.includes("Featured")){
                matched1.push(element) 
            }
                featured = matched1.slice(0, 8)
            }
    }

   


    return (
            <div className="for_grid mt-3">
                {featured?.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton} />)}
            </div>
    );
};

export default FeaturedProductTab;