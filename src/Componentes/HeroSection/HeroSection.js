import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import './HeroSection.css';



const HeroSection = () => {

    return (
        <div className='container my-5'>
            <div className='row'>
                <div className="col-md-3 shadow-sm rounded p-md-4">
                    <div className='for_responsive_col'>
                        <h2 className='text-secondary fs-5'>Categorys..</h2>
                        <hr />
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded' to="laptop">Laptop</Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded' to="laptop">Smart Phone</Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded' to="laptop">Camera</Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded' to="laptop">Gaming</Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded' to="laptop">Headphones</Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded' to="laptop">Speakers</Link>
                        <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded' to="laptop">Monitor</Link>  
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