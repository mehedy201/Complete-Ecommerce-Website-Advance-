import React from 'react';
import './ContactUs.css'
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import { Divider } from 'antd';
import { CiUser } from 'react-icons/ci';

const ContactUs = () => {
    return (
        <>
        {/* Header Section -------------------------------- */}
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Cart Page Main Section -----------------------= */}
          
            <div>
                <div className='contact_us_background_image'>
                    <div className="overly_contact_us_background">
                        <div className='container border p-2 m-2 mx-auto'>
                            <h1 className='text-white fw-bold mb-0 py-3'>Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className='mb-0 text-secondary'>Contact Details</h4>
                            <Divider className='mt-1 mb-2'/>
                            <p>Here is my contact details. 24/7 active. If you need any help. You can knock me.</p>
                            <div>
                                <h5 className='mb-0'>Md. Mehedi hasan</h5>
                                <small>Full-Stack Web Developer</small>
                                <div className='d-flex align-items-center py-1'>
                                    <CiUser className='contact_us_page_icon'/>
                                    <p className='mb-0 ms-2'>+880 1612013433</p>
                                </div>
                                <div className='d-flex align-items-center py-1'>
                                    <CiUser className='contact_us_page_icon'/>
                                    <p className='mb-0 ms-2'>+880 1853762637</p>
                                </div>
                                <div className='d-flex align-items-center py-1'>
                                    <CiUser className='contact_us_page_icon'/>
                                    <p className='mb-0 ms-2'>mehedi.hasan.mern@gmail.com</p>
                                </div>
                                <div className='d-flex align-items-center py-1'>
                                    <CiUser className='contact_us_page_icon'/>
                                    <p className='mb-0 ms-2'>mehedy643</p>
                                </div>
                                <div className='d-flex align-items-center py-1'>
                                    <CiUser className='contact_us_page_icon'/>
                                    <p className='mb-0 ms-2'>Chalkdomadi, Puthia-6260, Rajshahi, Bangladesh</p>
                                </div>
                                <h5 className='text-center text-secondary mt-4'>Social Link</h5>
                                <Divider className='mt-0'/>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <CiUser className='contact_us_page_social_icon mx-2'/>
                                    <CiUser className='contact_us_page_social_icon mx-2'/>
                                    <CiUser className='contact_us_page_social_icon mx-2'/>
                                    <CiUser className='contact_us_page_social_icon mx-2'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-4 shadow rounded mt-4">
                            <h4 className='mb-0 text-secondary text-center mt-2'>Contact with Email</h4>
                            <p className="text-center">I will get back soon</p>
                            <form action="">
                                <div className='d-flex mb-2'>
                                    <div className='w-50 me-2'>
                                        <span className='d-block text-secondary'>First Name</span>
                                        <input className='payment_check_out_input' type="text" />
                                    </div>
                                    <div className='w-50 ms-2'>
                                        <span className='d-block text-secondary'>Last Name</span>
                                        <input className='payment_check_out_input' type="text" />
                                    </div>
                                </div>
                                <span className='d-block text-secondary'>Email</span>
                                <input className='payment_check_out_input mb-2' type="email" />
                                <span className='d-block text-secondary'>Subject</span>
                                <input className='payment_check_out_input mb-2' type="text" />
                                <span className='d-block text-secondary'>Your Message</span>
                                <textarea className='payment_check_out_input mb-2' type="text" />
                                <div className='d-flex justify-content-end'>
                                    <input type="submit" value={'submit'} className='my-2 payment_check_out_btn bg-info fw-bold'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       
        {/* Footer Section ---------------------------------- */}
        <footer className='footer_color mt-4'>
          <FooterSection></FooterSection>
        </footer>
        </>
    );
};

export default ContactUs;