import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import './HeroSection.css';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosLaptop } from 'react-icons/io';
import { CiMobile2 } from 'react-icons/ci';
import { CiCamera } from 'react-icons/ci';
import { CiHeadphones } from 'react-icons/ci';
import { CiSpeaker } from 'react-icons/ci';
import { CiMonitor } from 'react-icons/ci';
import { TfiGame } from 'react-icons/tfi';




const HeroSection = () => {

    return (
        <div className='container my-5'>
            <div className='row'>
                <div className="col-md-3 shadow-sm rounded p-md-4">
                    <div className='for_responsive_col'>
                        <h2 className='text-secondary fs-5'>Categorys..</h2>
                        <hr />
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop"><IoIosLaptop className='hero_section_catagory_icon'/>Laptop<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop"><CiMobile2 className='hero_section_catagory_icon'/>Smart Phone<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop"><CiCamera className='hero_section_catagory_icon'/>Camera<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop"><TfiGame className='hero_section_catagory_icon'/>Gaming<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop"><CiHeadphones className='hero_section_catagory_icon'/>Headphones<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop"><CiSpeaker className='hero_section_catagory_icon'/>Speakers<BsArrowRight className='hero_animeted_icon'/></Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop"><CiMonitor className='hero_section_catagory_icon'/>Monitor<BsArrowRight className='hero_animeted_icon'/></Link>  
                    </div>
                </div>
                {/* Slider Section ----------------------------------- */}
                <div className="col-md-9 py-4">
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;