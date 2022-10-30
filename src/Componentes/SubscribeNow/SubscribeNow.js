import React from 'react';

const SubscribeNow = () => {
    return (
        <div className='container my-4'>
            <div className="row bg-warning align-items-center rounded py-3 px-2">
                <div className="col-md-6 col-sm-6">
                    <h5>Subscribe Now</h5>
                    <p className='mb-0'>Get Free email from our site and regular Update!</p>
                </div>
                <div className="col-md-6 col-sm-6 d-flex">
                    <input type="text" className='form-control me-2' />
                    <button className='btn btn-info'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNow;