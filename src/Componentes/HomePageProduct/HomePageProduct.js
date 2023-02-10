import React, { useState } from 'react';
import './HomePageProduct.css';
import { Tabs } from 'antd';
import FeaturedProductTab from './TabProducts/FeaturedProductTab';
import BestSaleingTab from './TabProducts/BestSaleingTab';
import TopRatedTab from './TabProducts/TopRatedTab';

const HomePageProduct = () => {

    const onChange = (key) => {
        console.log(key);
    };
    
    

    return (
        <div className="container my-4">
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                  {
                    label: <p className='fs-5 fw-bold mb-0'>Featured</p>,
                    key: '1',
                    children: <FeaturedProductTab/>,
                  },
                  {
                    label: <p className='fs-5 fw-bold mb-0'>Best Saleing</p>,
                    key: '2',
                    children: <BestSaleingTab/>,
                  },
                  {
                    label: <p className='fs-5 fw-bold mb-0'>Top Rated</p>,
                    key: '3',
                    children: <TopRatedTab/>,
                  },
                ]}
            />
        </div>
    );
};

export default HomePageProduct;