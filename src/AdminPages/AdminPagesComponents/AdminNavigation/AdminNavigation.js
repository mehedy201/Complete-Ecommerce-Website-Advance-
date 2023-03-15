import { Badge, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Firebase.init';

const AdminNavigation = () => {

    const navigate = useNavigate();
    // Sign Out button 
    const singOut = () => {
        signOut(auth);
        navigate('/admin')
        console.log('navigate')
      }
    const menu = (
        <Menu
          items={[
            { key: '1', label: ( <Link onClick={singOut} to={'/'}>Sign Out</Link>),},
          ]}
        />
      );
    return (
        <div className='bg-warning py-2 stiky-top'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='m-0'>Ecommerce Shop</h4>
                    <Badge count={0} size="small">
                        <Dropdown overlay={menu} placement="bottomRight" arrow>
                            <Link onClick={(e) => e.preventDefault()}>
                                <Space>
                                     <CiUser className='navigation_icon'/>
                                </Space>
                            </Link>
                        </Dropdown>
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default AdminNavigation;