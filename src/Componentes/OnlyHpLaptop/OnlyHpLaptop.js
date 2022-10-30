import { Rate } from 'antd';
import React from 'react';
import './OnlyHpLaptop.css';
import laptopImage from '../../Images/Hp-removebg-preview.png';
import Carousel from 'react-multi-carousel';

const OnlyHpLaptop = () => {

    // Responsive Carousel Style -----------------------------
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-3 laptop_section_background">
                    <div className="overly">
                        <h3 className='text-white'>We owner of HP laptop showroom</h3>
                        <p className='text-white'>You can buy orginal hp product from me. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facilis.</p>
                        <button className='btn btn-info'>View All</button>
                    </div>
                </div>
                <div className="col-md-9">
                    <Carousel  
                    responsive={responsive}
                    >
                        <div className="product_border_top overflow-hidden rounded shadow-sm mx-2">
                            <div className='d-flex justify-content-center'>
                                <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                            </div>
                            <div className='px-4 pb-4'>
                                <small>HP</small>
                                <h5 className='mb-1'>Laptop</h5>
                                <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                                <Rate value={5} />
                                <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                            </div>
                        </div>
                        <div className="product_border_top overflow-hidden rounded shadow-sm mx-2">
                            <div className='d-flex justify-content-center'>
                                <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                            </div>
                            <div className='px-4 pb-4'>
                                <small>HP</small>
                                <h5 className='mb-1'>Laptop</h5>
                                <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                                <Rate value={5} />
                                <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                            </div>
                        </div>
                        <div className="product_border_top overflow-hidden rounded shadow-sm mx-2">
                            <div className='d-flex justify-content-center'>
                                <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                            </div>
                            <div className='px-4 pb-4'>
                                <small>HP</small>
                                <h5 className='mb-1'>Laptop</h5>
                                <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                                <Rate value={5} />
                                <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                            </div>
                        </div>
                        <div className="product_border_top overflow-hidden rounded shadow-sm mx-2">
                            <div className='d-flex justify-content-center'>
                                <img className='hompage_product_image_size p-1' src={laptopImage} alt="" />
                            </div>
                            <div className='px-4 pb-4'>
                                <small>HP</small>
                                <h5 className='mb-1'>Laptop</h5>
                                <p className='mb-0 text-info fw-semibold'>Price: $100.00</p>
                                <Rate value={5} />
                                <button className='btn btn-sm bg-warning mt-2 d-block'>Buy Now</button>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default OnlyHpLaptop;