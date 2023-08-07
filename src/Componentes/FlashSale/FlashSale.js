import React from 'react';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import FlashSaleSlider from './FlashSaleSlider';


const FlashSale = () => {

    // Responsive Carousel Style -----------------------------
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 564 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 564, min: 0 },
          items: 1
        }
      };

      const navigate = useNavigate();
    const handleBuyNowButton = (id) => {
        navigate(`/single-product/${id}`)
    }

    const {data: productData,  isLoading} = useQuery({
        queryKey: ['forTabs'],
        queryFn: () => fetch('https://complete-ecommerce-shop-server.vercel.app/products')
        .then(res => res.json())
    })
  
    const matched1 = [];
    let flashSale;
    if(isLoading){
       return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }else{
        for (let i = 0; i < productData.length; i++) {
            const element = productData[i];
            if(element.inputCriteriaData.includes("Flash Sale")){
                matched1.push(element) 
            }
                flashSale = matched1.slice(0, 8)
            }
    }
    return (
        <div className='container mt-5'>
            <h4>Today Flash Sale</h4>
            <div className='border border-warning p-4 rounded'>
            <Carousel
             responsive={responsive}
             >
                {/* <div className='w-md-50 d-flex align-items-center'>
                    <img style={{height: 'auto', width: '150px', margin: '15px'}} src={headPhoneImage} alt="" />
                    <div>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, porro?</p>
                        <button className='btn bg-info'>Buy Now</button>
                    </div>
                </div> */}
              
               {
                 flashSale.map(product => <FlashSaleSlider key={product._id} product={product} handleBuyNowButton={handleBuyNowButton} />)
               }
            </Carousel>
            </div>
            <br />
        </div>
    );
};

export default FlashSale;