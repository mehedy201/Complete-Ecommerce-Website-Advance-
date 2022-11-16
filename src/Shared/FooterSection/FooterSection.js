import React from 'react';
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from 'react-icons/ti';
import { RiLinkedinLine } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import './FooterSection.css'


const FooterSection = () => {
    return (
        <>
        <div className='container py-4'>
            <div className="row">
                <div className="col-md-3 col-sm-6 d-flex align-items-center">
                    <div>
                        <h2 style={{color: '#FFC000'}}>Ecommerce Shop</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ipsa?</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h5>Catagory</h5>
                    <Link className='d-block' to={'/'}>Laptop</Link>
                    <Link className='d-block' to={'/'}>Smart Phone</Link>
                    <Link className='d-block' to={'/'}>Camera</Link>
                    <Link className='d-block' to={'/'}>Gaming</Link>
                    <Link className='d-block' to={'/'}>Headphones</Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h5>Install App</h5>
                    <p>Save 10%</p>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h5>Contact Us</h5>
                    <p className='mb-1'>Whatsapp: <span>+880 1853762637</span></p>
                    <p className='mb-1'>Email: mehedi.hasan.mern@gmail.com</p>
                    <p className='mb-1'>Skype: mehedi643</p>
                    <div>
                        <Link to={'https://www.linkedin.com/in/md-mehedi-hasan-65b110178/'} target='_blank'><RiLinkedinLine className='footer_social_icon text-dark'/></Link>
                        <Link to={'https://github.com/mehedy201'} target='_blank'><AiFillGithub className='footer_social_icon text-dark'/></Link>
                        <Link to={'https://web.facebook.com/mehedi.mern/'} target='_blank'><TiSocialFacebook className='footer_social_icon text-dark'/></Link>
                    </div>
                </div>
            </div>
        </div>
            <div className='bg-dark py-3'>
                <p className='mb-0 text-center text-white'>All Rights Reserved 2022 &copy; Md. Mehedi Hasan <span style={{color: '#FFC000'}}>Full-Stack Web Developer</span></p>
            </div>
        </>
    );
};

export default FooterSection;