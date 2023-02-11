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

    const {data,  isLoading} = useQuery({
        queryKey: ['featuredProduct'],
        queryFn: () => fetch('http://localhost:5000/products')
        .then(res => res.json())
      })
  
    let loadingElement;
    const matched1 = [];
    let featured;
    if(isLoading){
       return loadingElement = <Spin/>
    }else{
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
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