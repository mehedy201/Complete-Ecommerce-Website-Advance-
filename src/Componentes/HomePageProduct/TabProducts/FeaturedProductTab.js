import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCardComponents from '../../../Shared/ProductCardComponents/ProductCardComponents';


const FeaturedProductTab = () => {
    // useNavigate hook From React -------------------------
    const navigate = useNavigate();
    const handleBuyNowButton = () => {
        navigate(`/single-product`)
    }

    const {data,  isLoading} = useQuery({
        queryKey: ['featuredProduct'],
        queryFn: () => fetch('http://localhost:5000/products')
        .then(res => res.json())
      })
  
    let loadingElement;
    if(isLoading){
      return  loadingElement = <Spin/>
    }

    const matched1 = [];
    let featured;
    for(const product of data){
      if(product.inputCriteriaData.includes("Featured")){
        matched1.push(product) 
      }
      featured = matched1.slice(0, 8)
    }

    return (
            <div className="for_grid mt-3">
                {loadingElement}
                {featured.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton}/>)}
            </div>
    );
};

export default FeaturedProductTab;