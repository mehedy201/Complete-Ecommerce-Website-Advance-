import { useQuery } from '@tanstack/react-query';
import { Badge, Rate, Spin } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import laptopImage from '../../../Images/Hp-removebg-preview.png'
import ProductCardComponents from '../../../Shared/ProductCardComponents/ProductCardComponents';


const BestSaleingTab = () => {
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
      let bestSaleing;
      for(const product of data){
        if(product.inputCriteriaData.includes("Best Saleing")){
          matched1.push(product) 
        }
        bestSaleing = matched1.slice(0, 8)
      }
    return (
        <div className="for_grid mt-3">
            {loadingElement}
            {bestSaleing.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton}/>)}
        </div>
    );
};

export default BestSaleingTab;