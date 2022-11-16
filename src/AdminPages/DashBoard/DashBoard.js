import { Divider } from 'antd';
import React, { useState } from 'react';
import './DashBoard.css'
import { Link, Outlet } from 'react-router-dom';
import AdminNavigation from '../AdminPagesComponents/AdminNavigation/AdminNavigation'
import { CiHome } from 'react-icons/ci';
import { MdAddShoppingCart } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { CgEditUnmask } from 'react-icons/cg';


const DashBoard = () => {
        // UseState from react hooks
        const [title, setTitle] = useState('Dashboard')
        const handleDashboard = () => {
            setTitle('Dashboard')
        }
        const handleAddProduct = () => {
            setTitle('Add Product')
        }
        const handleManageProduct = () => {
            setTitle('Manage Product')
        }
        const handleManageOrder = () => {
            setTitle('Manage Order')
        }
    return (
        <>
        {/* Main Section -------------------- */}
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2 bg-secondary pt-5 ps-md-5 for_height_admin_left">
                    <h5 className='text-info'>{title}</h5>
                    <Divider/>
                    <Link onClick={handleDashboard} to={''} className='d-block text-white my-2'><CiHome className='admin_dasboard_icon'/>Dashboard</Link>
                    <Link onClick={handleAddProduct} to={'add-product'} className='d-block text-white my-2'><MdAddShoppingCart className='admin_dasboard_icon'/>Add Product</Link>
                    <Link onClick={handleManageProduct} to={'manage-product'} className='d-block text-white my-2'><CiEdit className='admin_dasboard_icon'/>Manage Product</Link>
                    <Link onClick={handleManageOrder} to={'manage-order'} className='d-block text-white my-2'><CgEditUnmask className='admin_dasboard_icon'/>Manage Order</Link>
                </div>
                <div className="col-md-10 p-0">
                    <AdminNavigation/>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    );
};

export default DashBoard;