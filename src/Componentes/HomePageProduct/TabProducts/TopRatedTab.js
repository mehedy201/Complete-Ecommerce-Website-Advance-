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
    const {data: productData,  isLoading} = useQuery({
        queryKey: ['forTabs'],
        queryFn: () => fetch('http://localhost:5000/products')
        .then(res => res.json())
      })
    
    if(isLoading){
      return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }

    const matched1 = [];
    let topRated;
    for(const product of productData){
      if(product.inputCriteriaData.includes("Top Rated")){
        matched1.push(product) 
      }
      topRated = matched1.slice(0, 8)
    }
    
    return (
        <div className="for_grid mt-3">
           {topRated?.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton}/>)}
        </div>
    );
};

export default TopRatedTab;