import React from 'react';
import './ShopPolicy.css'
import { CiDeliveryTruck } from 'react-icons/ci';
import { VscFeedback } from 'react-icons/vsc';
import { GiPayMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';

const ShopPolicy = () => {
    return (
        <div className='container'>
            <div className="row py-3 rounded mb-4 for_box_shadow">
                <div className="col-md-3 col-sm-6 my-2 col_hover_effect border-end">
                    <CiDeliveryTruck className='shop_policy_icon'/>
                    <div>
                        <h6>Free Delivery</h6>
                        <p className='mb-0'>From $10</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 my-2 col_hover_effect border-end">
                    <VscFeedback className='shop_policy_icon'/>
                    <div>
                        <h6>100% Customer</h6>
                        <p className='mb-0'>Feedbacks</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 my-2 col_hover_effect border-end">
                    <GiPayMoney className='shop_policy_icon'/>
                    <div>
                        <h6>Payment</h6>
                        <p className='mb-0'>Suqure System</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 my-2 col_hover_effect">
                    <BiSupport className='shop_policy_icon'/>
                    <div>
                        <h6>24/7</h6>
                        <p className='mb-0'>Free Support</p>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default ShopPolicy;