import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCardComponents from '../../../Shared/ProductCardComponents/ProductCardComponents';

const TopRatedTab = () => {
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
    if(isLoading){
      return  loadingElement = <Spin/>
    }

    const matched1 = [];
    let topRated;
    for(const product of data){
      if(product.inputCriteriaData.includes("Top Rated")){
        matched1.push(product) 
      }
      topRated = matched1.slice(0, 8)
    }
    
    return (
        <div className="for_grid mt-3">
           {loadingElement}
           {topRated?.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton}/>)}
        </div>
    );
};

export default TopRatedTab;