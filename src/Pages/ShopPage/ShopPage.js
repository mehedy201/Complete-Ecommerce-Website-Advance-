import React from 'react';
import './ShopPage.css'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosLaptop } from 'react-icons/io';
import { CiMobile2 } from 'react-icons/ci';
import { CiCamera } from 'react-icons/ci';
import { CiHeadphones } from 'react-icons/ci';
import { CiSpeaker } from 'react-icons/ci';
import { CiMonitor } from 'react-icons/ci';
import { TfiGame } from 'react-icons/tfi';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';
import Navigation from '../../Shared/Navigation/Navigation';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import ShopProduct from './ShopProduct/ShopProduct';

const ShopPage = (index) => {

    return (
        <>
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        <div className='container my-5'>
            <div className='row'>
                <div className="col-md-3 shadow-sm rounded p-md-4 bg-light">
                    <div className='for_responsive_col'>
                        <h2 className='text-secondary fs-5'>Categorys..</h2>
                        <hr />
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="/laptop"><IoIosLaptop className='hero_section_catagory_icon'/>Laptop<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="/smartPhone"><CiMobile2 className='hero_section_catagory_icon'/>Smart Phone<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="/camera"><CiCamera className='hero_section_catagory_icon'/>Camera<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="/drone"><TfiGame className='hero_section_catagory_icon'/>Drone<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="/headPhone"><CiHeadphones className='hero_section_catagory_icon'/>Headphones<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="/speakers"><CiSpeaker className='hero_section_catagory_icon'/>Speakers<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="/monitor"><CiMonitor className='hero_section_catagory_icon'/>Monitor<BsArrowRight className='hero_animeted_icon'/></Link>  
                    </div>
                </div>
                {/* Product Section ----------------------------------- */}
                <div className="col-md-9 py-4">
                    <div className="shop_page_grid">
                        <ShopProduct></ShopProduct>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer --------------------------------- */}
        <footer className='footer_color mt-4'>
            <FooterSection></FooterSection>
        </footer>
    </>
    );
};

export default ShopPage;