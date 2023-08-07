import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const SubscribeNow = () => {


    // React Hook Form --------------------------------------
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    
  // Sent Email Data Server ----------------------
    fetch('https://complete-ecommerce-shop-server.vercel.app/subscriber',{
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
          if(data.success){
              toast.success('Now Your are member our site.')
              reset();
          }
          if(data.error){
            toast.error("Email Not Sent")
          }
      })
  }


    return (
        <div className='container my-4'>
            <div className="row bg-warning align-items-center rounded py-3 px-2">
                <div className="col-md-6 col-sm-6">
                    <h5>Subscribe Now</h5>
                    <p className='mb-0'>Get Free email from our site and regular Update!</p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <form className='d-flex' onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" className='form-control me-2' {...register("email")}/>
                        <button type='submit' className='btn btn-info'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubscribeNow;