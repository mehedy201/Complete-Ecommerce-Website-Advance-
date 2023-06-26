import { Divider, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css'
import { BsPlusLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ManageProductList from './ManageProductList';
import toast from 'react-hot-toast';

const ManageProduct = () => {

    const [productData, setProductData] = useState([])
    
    // Navigate to Add Product Page
    const navigate = useNavigate()
    const addProduct = () => {
        navigate('/dashboard/add-product')
    }

    const {data,  isLoading} = useQuery({
      queryKey: ['heroContent'],
      queryFn: () => fetch('https://ecommerce-shop-yshv.onrender.com/products')
                     .then(res => res.json())
    })

    useEffect(() => {
      if(data){
        setProductData(data)
      }
    },[data])
  
    let productLoading;
    if(isLoading){
      // productLoading = <Spin />
      return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }

    
    const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure to Delete');
      if(proceed){
          const url = `https://complete-ecommerce-shop-advance-server-site.vercel.app/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              const remain = productData.filter(item => item._id !== id);
              console.log(data, productData);
              setProductData(remain);
              toast.success('Product Deleted.!', {
                duration: 3000,
                position: 'top-right'
            });
          })
      }
  }

    return (
        <div className='container mt-3'>
            <h6 className='text-secondary mb-0'>List of Product <span className='text-dark'>{data?.length}</span></h6>
            <Divider className='mt-2'/>
            <div className='d-md-flex d-sm-flex justify-content-between align-items-center mb-2'>
                <div className='my-2 d-flex align-items-center'>
                    <span className='fs-6 fw-semibold bg-info py-2 px-sm-4 px-md-4 px-3'>Filter All</span>
                    <input className='search_input_design' type="text" placeholder='Serch Here'/>
                </div>
                {productLoading}
                <div className='my-2'>
                    <button onClick={addProduct} className='button_add_product bg-info fw-bold text-white'><BsPlusLg className='add_product_icon'/>Add Product</button>
                </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Code</th>
                  <th scope="col">Published</th>
                  <th scope="col">More Options</th>
                </tr>
              </thead>
              <tbody>
                  {
                    productData?.map((product, index) => <ManageProductList key={index} index={index} product={product} handleDelete={handleDelete}/>)
                  }
                
              </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;