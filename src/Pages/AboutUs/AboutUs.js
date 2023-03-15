import React from 'react';
import './AboutUs.css'
import FooterSection from '../../Shared/FooterSection/FooterSection';
import mehedi from '../../Images/aaaaaIMG_9935-mikkkkkn.JPG'
import { Divider  } from 'antd';

const AboutUs = () => {

  
    return (
        <>
        {/* Cart Page Main Section -----------------------= */}
            <div className='container my-5'>
                <div className='row shadow rounded align-items-center p-4 about_page_hero_section my-4'>
                    <div className='col-md-6'>
                        <img className='my_image' src={mehedi} alt="mehedi" />
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h1 className='mb-0 text-secondary'>About Us</h1>
                            <Divider className='mt-0 mb-4 divider_color'/>
                            <h4 className='mb-0'>Md. Mehedi Hasan</h4>
                            <small>Full-Stack web developer</small>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum amet repudiandae laudantium tempora architecto soluta?</p>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6">
                        <h4>Demo</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae a, nostrum aliquam totam hic sunt omnis, nisi assumenda quos eos suscipit sint ratione nobis dolor possimus dignissimos odio quidem incidunt exercitationem sit et quod rem. Modi, tempore odit doloremque, hic sit quam nesciunt deserunt, dignissimos maxime ad voluptatum quaerat reiciendis?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae a, nostrum aliquam totam hic sunt omnis, nisi assumenda quos eos suscipit sint ratione nobis dolor possimus dignissimos odio quidem incidunt exercitationem sit et quod rem. Modi, tempore odit doloremque, hic sit quam nesciunt deserunt, dignissimos maxime ad voluptatum quaerat reiciendis?</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <h1 className='text-secondary my-auto'>Imgae will be here</h1>
                        
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

export default AboutUs;