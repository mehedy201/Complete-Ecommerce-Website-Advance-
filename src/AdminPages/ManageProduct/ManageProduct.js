import { Divider } from 'antd';
import React from 'react';
import './ManageProduct.css'
import headphone from '../../Images/headphones.jpg';
import laptop from '../../Images/Hp-removebg-preview.png'
import { MdOutlineCloudDone } from 'react-icons/md';
import { RiEditBoxLine } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ManageProduct = () => {
    
    // Navigate to Add Product Page
    const navigate = useNavigate()
    const addProduct = () => {
        navigate('/dashboard/add-product')
    }
    return (
        <div className='container mt-3'>
            <h6 className='text-secondary mb-0'>List of Product <span className='text-dark'>100</span></h6>
            <Divider className='mt-2'/>
            <div className='d-md-flex d-sm-flex justify-content-between align-items-center mb-2'>
                <div className='my-2 d-flex align-items-center'>
                    <span className='fs-6 fw-semibold bg-info py-2 px-sm-4 px-md-4 px-3'>Filter All</span>
                    <input className='search_input_design' type="text" placeholder='Serch Here'/>
                </div>
                <div className='my-2'>
                    <button onClick={addProduct} className='button_add_product bg-info fw-bold text-white'><BsPlusLg className='add_product_icon'/>Add Product</button>
                </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Code</th>
                  <th scope="col">Published</th>
                  <th scope="col">More Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className='fw-bold'><img src={headphone} style={{height: '35px', width: '35px', marginRight: '10px'}} alt="" /> Product Title Demo</td>
                  <td>alkdjfkfjaaaaaa</td>
                  <td><MdOutlineCloudDone className='text-success' style={{height: '25px', width: 'auto'}}/></td>
                  <td>
                    <RiEditBoxLine className='me-2' style={{height: '20px', width: 'auto', color: '#4903fc'}}/> 
                    <AiOutlineDelete className='text-danger me-3' style={{height: '20px', width: 'auto'}}/> 
                    <BiDotsVerticalRounded className='text-secondary' style={{height: '20px', width: 'auto'}}/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className='fw-bold'><img src={laptop} style={{height: '35px', width: '35px', marginRight: '10px'}} alt="" /> Product Title Demo Product Title Demo</td>
                  <td>alkdjfkfjaaaaaa</td>
                  <td><MdOutlineCloudDone className='text-success' style={{height: '25px', width: 'auto'}}/></td>
                  <td>
                    <RiEditBoxLine className='me-2' style={{height: '20px', width: 'auto', color: '#4903fc'}}/> 
                    <AiOutlineDelete className='text-danger me-3' style={{height: '20px', width: 'auto'}}/> 
                    <BiDotsVerticalRounded className='text-secondary' style={{height: '20px', width: 'auto'}}/>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;