import React from 'react';
import headPhoneImage from '../../Images/headphones.jpg';
import Carousel from 'react-multi-carousel';


const FlashSale = () => {

    // Responsive Carousel Style -----------------------------
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 564 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 564, min: 0 },
          items: 1
        }
      };
    return (
        <div className='container mt-5'>
            <h4>Today Flash Sale</h4>
            <div className='border border-warning p-4 rounded'>
            <Carousel
             responsive={responsive}
             className=''>
                <div className='w-md-50 d-flex align-items-center'>
                    <img style={{height: 'auto', width: '150px', margin: '15px'}} src={headPhoneImage} alt="" />
                    <div>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, porro?</p>
                        <button className='btn bg-info'>Buy Now</button>
                    </div>
                </div>
                <div className='w-md-50 d-flex align-items-center'>
                    <img style={{height: 'auto', width: '150px', margin: '15px'}} src={headPhoneImage} alt="" />
                    <div>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, porro?</p>
                        <button className='btn bg-info'>Buy Now</button>
                    </div>
                </div>
                <div className='w-md-50 d-flex align-items-center'>
                    <img style={{height: 'auto', width: '150px', margin: '15px'}} src={headPhoneImage} alt="" />
                    <div>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, porro?</p>
                        <button className='btn bg-info'>Buy Now</button>
                    </div>
                </div>
            </Carousel>
            </div>
            <br />
        </div>
    );
};

export default FlashSale;