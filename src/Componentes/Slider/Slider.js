import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
import mobileImage from '../../Images/Iphone14.jpg'
import laptopImage from '../../Images/Hp-removebg-preview.png'
import headPhoneImage from '../../Images/headphones.jpg'

const Slider = () => {
    return (
        <>
            <Carousel fade variant="dark" prevIcon="" nextIcon="">
                        <Carousel.Item>
                          <div className='row align-items-center justify-content-between slide-hight'>
                              <div className='col-md-6 ps-md-5 justify-content-center'>
                                 <p className="text-danger">Limited Product</p>
                                <h3>Iphone 14 Pro Max</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet.</p>
                                <button className='btn bg-warning'>Smart Phone Page</button>
                              </div>
                                <div className='col-md-6 d-flex justify-content-center align-items-center'>
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
                                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                    <img
                                      className="slide_img_laptop"
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
                            <div className='row d-flex align-items-center justify-content-around slide-hight'>
                                <div className='col-md-6 ps-md-5'>
                                    <p className="text-info">Special</p>
                                  <h3>Plug it, listen to it, feel it</h3>
                                  <p>Keeping your ears safe and music loud, a pharetra augue mollis interdum. Lorem ipsum dolor sit amet.</p>
                                  <button className='btn bg-warning'>View Headphones</button>
                                </div>
                                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                    <img
                                      className="slide_img flex-1"
                                      src={headPhoneImage}
                                      alt="First slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
        </>
    );
};

export default Slider;