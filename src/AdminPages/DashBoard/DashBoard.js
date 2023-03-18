import { Divider } from 'antd';
import React, { useState } from 'react';
import './DashBoard.css'
import { NavLink, Outlet } from 'react-router-dom';
import AdminNavigation from '../AdminPagesComponents/AdminNavigation/AdminNavigation'
import { MdSpaceDashboard, MdAddToPhotos, MdUnsubscribe } from 'react-icons/md';
import { SiGoogletagmanager } from 'react-icons/si';
import { AiTwotoneTags } from 'react-icons/ai';
import logoImage from '../../Images/shop_logo.png'


const DashBoard = () => {
        
    return (
        <>
        {/* Main Section -------------------- */}
        <div className='container-fluid'>
            <div className="row">
                <div className="col-2 bg-light pt-5 ps-md-5 for_height_admin_left">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={logoImage} style={{height: '60px', width: 'auto'}} alt="" />
                    </div>
                    <Divider/>
                    <NavLink to={''} className='d-block p-2 fw-bold dashboard_link'><MdSpaceDashboard className='admin_dasboard_icon'/>Dashboard</NavLink>
                    <NavLink to={'add-product'} className='d-block p-2 fw-bold dashboard_link'><MdAddToPhotos className='admin_dasboard_icon'/>Add Product</NavLink>
                    <NavLink to={'manage-product'} className='d-block p-2 fw-bold dashboard_link'><SiGoogletagmanager className='admin_dasboard_icon'/>Manage Product</NavLink>
                    <NavLink to={'manage-order'} className='d-block p-2 fw-bold dashboard_link'><AiTwotoneTags className='admin_dasboard_icon'/>Manage Order</NavLink>
                    <NavLink to={'subscriber'} className='d-block p-2 fw-bold dashboard_link'><MdUnsubscribe className='admin_dasboard_icon'/>Subscriber</NavLink>
                </div>
                <div className="col-10 p-0">
                    <AdminNavigation/>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    );
};

export default DashBoard;