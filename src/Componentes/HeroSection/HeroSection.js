import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import mobileImage from '../../Images/Iphone14.jpg'
import laptopImage from '../../Images/Hp-removebg-preview.png'
import headPhoneImage from '../../Images/headphones.jpg'


const HeroSection = () => {

    return (
        <div className='container my-5'>
            <div className='row'>
                <div className="col-md-3 shadow-sm rounded p-4">
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
                <div className="col-md-9 py-4">
                    <Carousel fade variant="dark" prevIcon="none" nextIcon="none">
                        <Carousel.Item>
                          <div className='row align-items-center justify-content-between slide-hight'>
                              <div className='col-md-6'>
                                 <p className="text-danger">Limited Product</p>
                                <h3>Iphone 14 Pro Max</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet.</p>
                                <button className='btn bg-warning'>Smart Phone Page</button>
                              </div>
                                <div className='col-md-6'>
                                    <img
                                      className="slide_img flex-1"
                                      src={mobileImage}
                                      alt="First slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='row align-items-center justify-content-around slide-hight'>
                                <div className='col-md-6'>
                                    <img
                                      className="slide_img_laptop flex-1"
                                      src={laptopImage}
                                      alt="First slide"
                                    />
                                </div>
                                <div className='col-md-6'>
                                   <p className='text-warning'>Designed with precision</p>
                                  <h3>Hp Gaming Laptop for Gamers</h3>
                                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet.</p>
                                  <button className='btn bg-warning'>View all Laptop</button>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='row align-items-center justify-content-around slide-hight'>
                                <div className='col-md-6'>
                                    <p className="text-info">Special</p>
                                  <h3>Plug it, listen to it, feel it</h3>
                                  <p>Keeping your ears safe and music loud, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet.</p>
                                  <button className='btn bg-warning'>View Headphones</button>
                                </div>
                                <div className='col-md-6'>
                                    <img
                                      className="slide_img flex-1"
                                      src={headPhoneImage}
                                      alt="First slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;