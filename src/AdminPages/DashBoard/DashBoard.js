import { Divider } from 'antd';
import React, { useState } from 'react';
import './DashBoard.css'
import { Link, Outlet } from 'react-router-dom';
import AdminNavigation from '../AdminPagesComponents/AdminNavigation/AdminNavigation'
import { CiHome } from 'react-icons/ci';
import { MdAddShoppingCart } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { CgEditUnmask } from 'react-icons/cg';
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
                    <Link to={''} className='d-block my-2'><CiHome className='admin_dasboard_icon'/>Dashboard</Link>
                    <Link to={'add-product'} className='d-block my-2'><MdAddShoppingCart className='admin_dasboard_icon'/>Add Product</Link>
                    <Link to={'manage-product'} className='d-block my-2'><CiEdit className='admin_dasboard_icon'/>Manage Product</Link>
                    <Link to={'manage-order'} className='d-block my-2'><CgEditUnmask className='admin_dasboard_icon'/>Manage Order</Link>
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