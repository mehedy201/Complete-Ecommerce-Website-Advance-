import React from 'react';
import { MdOutlineCloudDone } from 'react-icons/md';
import { RiEditBoxLine } from 'react-icons/ri';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Popover, Tooltip } from 'antd';

const ManageProductList = ({index, product, handleDelete}) => {

    console.log(product._id)

    // Navigate to Add Product Page
    const navigate = useNavigate()
    const editProduct = () => {
        navigate('/dashboard/add-product')
    }

    

    const content = (
        <div>
          <p onClick={editProduct} className='for_pointer for_hover'>Edit</p>
          <p onClick={() => handleDelete(product._id)} className='for_pointer for_hover'>Delete</p>
        </div>
      );
    return (
        <>
            <tr>
                <th scope="row">{index}</th>
                <td className='fw-bold'><img src={product?.featuredImage} style={{height: '35px', width: '35px', marginRight: '10px'}} alt="" />{product.title}</td>
                <td>{product.inputCategoryData}</td>
                <td>{product._id}</td>
                <td><MdOutlineCloudDone className='text-success' style={{height: '25px', width: 'auto'}}/></td>
                <td>
                    <Tooltip title="Edit">
                      <RiEditBoxLine onClick={editProduct} className='me-2 for_pointer' style={{height: '20px', width: 'auto', color: '#4903fc'}}/> 
                    </Tooltip>
                    <Tooltip title="Delete">
                      <AiOutlineDelete onClick={() => handleDelete(product._id)} className='text-danger me-3 for_pointer' style={{height: '20px', width: 'auto'}}/> 
                    </Tooltip>
                    <Popover content={content} title="Action">
                        <BiDotsVerticalRounded className='text-secondary for_pointer' style={{height: '20px', width: 'auto'}}/>
                    </Popover>
                </td>
            </tr>
        </>
    );
};

export default ManageProductList;