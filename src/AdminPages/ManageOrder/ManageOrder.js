import { Divider } from 'antd';
import React from 'react';
import './ManageOrder.css'
import headphone from '../../Images/headphones.jpg';
import laptop from '../../Images/Hp-removebg-preview.png'
import { AiOutlineDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

const ManageOrder = () => {
    return (
        <div className='container mt-3'>
            <h4>Manage Order</h4>
            <Divider className='mt-2'/>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Payment</th>
                  <th scope="col">Status</th>
                  <th scope="col">Update Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className='fw-bold'><img src={headphone} style={{height: '35px', width: '35px', marginRight: '10px'}} alt="" /> Product Title Demo</td>
                  <td><MdDone className='text-success fs-3'/></td>
                  <td><button className='btn btn-sm bg-danger fw-bold text-white'>Pending</button></td>
                  <td>
                    <button className='btn btn-sm bg-warning fw-bold'>Update Status</button>
                    <AiOutlineDelete className='text-danger ms-3' style={{height: '20px', width: 'auto'}}/> 
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className='fw-bold'><img src={laptop} style={{height: '35px', width: '35px', marginRight: '10px'}} alt="" /> Product Title Demo Product Title Demo</td>
                  <td><MdDone className='text-success fs-3'/></td>
                  <td><button className='btn btn-sm bg-danger fw-bold text-white'>Pending</button></td>
                  <td>
                    <button className='btn btn-sm bg-warning fw-bold'>Update Status</button>
                    <AiOutlineDelete className='text-danger ms-3' style={{height: '20px', width: 'auto'}}/> 
                  </td>
                </tr>
              </tbody>
            </table>
            
        </div>
    );
};

export default ManageOrder;