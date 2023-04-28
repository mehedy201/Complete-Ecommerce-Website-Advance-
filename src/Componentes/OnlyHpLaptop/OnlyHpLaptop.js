import { Spin } from 'antd';
import React, { useState } from 'react';
import './OnlyHpLaptop.css';
import Carousel from 'react-multi-carousel';
import { useQuery } from '@tanstack/react-query';
import ProductCardComponents from '../../Shared/ProductCardComponents/ProductCardComponents';
import { useNavigate } from 'react-router-dom';

const OnlyHpLaptop = () => {

    const navigate = useNavigate()
    const {data: carouselData,  isLoading} = useQuery({
        queryKey: ['laptop'],
        queryFn: () => fetch('http://localhost:5000/products/category/Laptop')
        .then(res => res.json())
      })
  
    if(isLoading){
         return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }

    const handleBuyNowButton = (id) => {
        navigate(`/single-product/${id}`)
    }

    // Responsive Carousel Style -----------------------------
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3 laptop_section_background">
                    <div className="overly">
                        <h3 className='text-white'>HP laptop</h3>
                        <p className='text-white'>You can buy orginal hp product from me. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facilis.</p>
                        <button className='btn btn-info'>View All</button>
                    </div>
                </div>
                <div className="col-md-9">
                    {
                        carouselData &&
                        <Carousel  
                         responsive={responsive}
                         >
                             {carouselData.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton} />)}
                         </Carousel>
                    }
                </div>
            </div>
        </div>
    );
};

export default OnlyHpLaptop;