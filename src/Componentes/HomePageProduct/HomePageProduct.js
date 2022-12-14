import React from 'react';
import './HomePageProduct.css';
import laptopImage from '../../Images/Hp-removebg-preview.png'
import { Rate } from 'antd';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import FeaturedProductTab from './TabProducts/FeaturedProductTab';
import BestSaleingTab from './TabProducts/BestSaleingTab';
import TopRatedTab from './TabProducts/TopRatedTab';

const HomePageProduct = () => {
    // useNavigate hook From React -------------------------
    const navigate = useNavigate();
    const handleBuyNowButton = () => {
        navigate(`/single-product`)
    }

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