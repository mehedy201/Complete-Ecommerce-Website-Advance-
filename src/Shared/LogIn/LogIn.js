import React from 'react';
import './LogIn.css';
import { useForm } from "react-hook-form";
import FooterSection from '../FooterSection/FooterSection';
import TopNavigation from '../TopNavigation/TopNavigation';
import Navigation from '../Navigation/Navigation';
import { FiUser } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { Divider } from 'antd';

const LogIn = () => {
    // For React form hooks ---------------------
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);


    return (
        <>
        {/* Navigation ------------------------------------------------------------------------------------ */}
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Form Section ---------------------------------------------------------------------------------- */}
            <div className='container d-flex justify-content-center my-5'>
                <div className="border p-4 md-w-50 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span className='d-flex justify-content-center'><FiUser className='log_in_icon'/></span>
                        <h4 className='text-center mt-2 mb-1'>Please Log In</h4>
                        <p className='text-center'>If you have an account, sign in with your email address.</p>    
                        {/* Email Input Field ------------------------------------------------- */}
                        <input 
                            type='email'
                            className='log_in_input mt-2'
                            placeholder='Your Email'
                            {...register("email", { required: true })} 
                            aria-invalid={errors.email ? "true" : "false"} 
                        />
                        {/* Email Error Message -------------------- */}
                        {errors.email?.type === 'required' && <p className='text-danger' role="alert">Email is required</p>}
                        {/* Email Input Field ------------------------------------------------- */}
                        <input 
                            type='password'
                            className='log_in_input'
                            placeholder='Password'
                            {...register("password", { required: true })} 
                            aria-invalid={errors.password ? "true" : "false"} 
                        />
                        {/* Email Error Message -------------------- */}
                        {errors.password && <p className='text-danger' role="alert">Password is required</p>}
                        {/* Submit Button ----------------------------------------------------- */}
                        <input type="submit" className='log_in_input_submit fw-semibold' />
                    </form>
                    <p className='mt-1 forget_password'>Forget Password</p>
                    <p>Don't have account Please <span className='log_and_sign_toggole'>Click Here</span></p>
                    <Divider>Register With Social</Divider>
                    <div className='d-flex justify-content-center'>
                        <BsGithub className='sign_up_icon'/>
                        <FaGoogle className='sign_up_icon'/>
                    </div>
                </div>
            </div>
            {/* Footer Section ---------------------------------------------------------------------------- */}
            <footer  className='footer_color mt-4'>
                <FooterSection></FooterSection>
            </footer>
        </>
    );
};

export default LogIn;