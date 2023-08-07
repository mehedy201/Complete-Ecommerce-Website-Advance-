import React, { useContext, useState } from 'react';
import './TopNavigation.css'
import { Dropdown, Menu, Space, Spin } from 'antd'
import { SlCallOut } from 'react-icons/sl';
import { CiUser } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import {  Badge } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CART_CONTEXT } from '../../App';
import { useQuery } from '@tanstack/react-query';

const TopNavigation = () => {

    const navigate = useNavigate();


    const { itemCount, setSearchProduct } = useContext(CART_CONTEXT);
    const [user, loading] = useAuthState(auth);
    const [searchInput, setSearchInput] = useState('')


    const cartProductData = JSON.parse(localStorage.getItem('cartProduct'));

    
    
    const handleSubmit = () => {
        const search = forFilter.filter(d =>d.title.toLowerCase().includes(searchInput.toLocaleLowerCase()))
        setSearchProduct(search)
        setSearchInput('')
        navigate('/searchPage')
    };


    const {data: forFilter , isLoading} = useQuery({
        queryKey: ['allProductData'],
        queryFn: () => fetch(`https://complete-ecommerce-shop-server.vercel.app/products`)
                       .then(res => res.json())
    })
  
    if(isLoading){
      return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }

    console.log('user', user)

   



    // Context State ____________________________________________________________________
    

    // Sign Out button 
    const singOutButton = () => {
      signOut(auth);
      navigate('/log-in')
    }
     // useNavigete from react hooks ----------------------
    const logoNavigate = () => {
        navigate('/')
    };
    const cartNavigate = () => {
        navigate('/cart')
    }

    

    if(loading){
        return <Spin style={{position: "fixed", top: '50%', left: '50%'}}/>
    }

    const menu = (
        <Menu
          items={[
            { key: '1', label: ( 
                user? 
                <p className='mb-0' onClick={singOutButton}>Sing Out</p>
                :
                <Link to={'/log-in'}>Log In</Link>
                )
            },
            { key: '2', label: ( user && <Link to={'/order-history'}>My Order History</Link>)},
          ]}
        />
      );

      


    return (
        <div className='for_navigation_background sticky-top z-index'>
            <div className='container py-2'>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 onClick={logoNavigate} className='fs-4 fw-bold my-auto for_logo_cursor'>Ecommerce Shop</h1>
                    <div className='for_responsivness_input'>
                        <div className='d-flex rounded-pill overflow-hidden'>
                            <input onChange={e => setSearchInput(e.target.value)}  className='input_design border-0 px-4 py-2' type="text" />
                            <button onClick={() => handleSubmit()} className='btn-secondary border-0 px-4 py-2 fw-bold'>Search</button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='for_responsivness_call'>
                            <div className='d-flex align-items-center me-5 for_responsivness_call'>
                                <SlCallOut className='navigation_icon p-1'/>
                                <div className='border-start ps-2 border-dark'>
                                    <p className='py-0 my-0 fw-semibold'>Call Us 24/7</p>
                                    <p className='py-0 my-0'>+880 1612013433</p>
                                </div> 
                            </div>
                        </div>
                        {
                            cartProductData ?
                            <Badge count={cartProductData.length} size="small">
                                <FiShoppingCart onClick={cartNavigate} className='navigation_icon p-1'/>
                            </Badge>
                            : 
                            <Badge count={itemCount} size="small">
                                <FiShoppingCart onClick={cartNavigate} className='navigation_icon p-1'/>
                            </Badge>
                        } 
                         
                         {/* <CiUser className='navigation_icon'/> */}
                            <Dropdown overlay={menu} placement="bottom" arrow>
                                <Link onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {
                                            user?.displayName ? <Badge count={user.displayName.slice(0,1)} style={{backgroundColor: '#52c41a'}} size="small" offset={[-5, 0]}>
                                                    <CiUser className='navigation_icon'/>
                                                  </Badge>
                                                  :
                                                  <CiUser className='navigation_icon'/>
                                        }
                                    </Space>
                                </Link>
                            </Dropdown>
                        
                    </div>
                </div>
                {/* Responsive search option when screen under 668 px -------------------------------------------------------- */}
                <div className='for_responsivness_phone_input'>
                    <div className='d-flex from-group rounded overflow-hidden'>
                        <input className='input_design border-0 px-4 py-2 mobile_input_size' type="text" name="" id="" />
                        <button className='border-0 px-4 py-2 fw-bold mobile_button_size'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;