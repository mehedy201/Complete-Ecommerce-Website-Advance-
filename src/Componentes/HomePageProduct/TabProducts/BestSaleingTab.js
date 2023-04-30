import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCardComponents from '../../../Shared/ProductCardComponents/ProductCardComponents';


const BestSaleingTab = () => {
    // useNavigate hook From React -------------------------
    const navigate = useNavigate();
    const handleBuyNowButton = (id) => {
        navigate(`/single-product/${id}`)
    }


    const {data: productData,  isLoading} = useQuery({
        queryKey: ['forTabs'],
        queryFn: () => fetch('https://ecommerce-shop-yshv.onrender.com/products')
        .then(res => res.json())
      })
  
      if(isLoading){
        return  <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
      }
  
      
      const matched1 = [];
      let bestSaleing;
      for(const product of productData){
        if(product.inputCriteriaData.includes("Best Saleing")){
          matched1.push(product) 
        }
        bestSaleing = matched1.slice(0, 8)
      }
    return (
        <div className="for_grid mt-3">
            {bestSaleing?.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton}/>)}
        </div>
    );
};

export default BestSaleingTab;