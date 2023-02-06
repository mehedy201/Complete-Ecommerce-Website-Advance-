import React, { useState } from 'react';
import './LogIn.css';
import { useForm } from "react-hook-form";
import FooterSection from '../FooterSection/FooterSection';
import TopNavigation from '../TopNavigation/TopNavigation';
import Navigation from '../Navigation/Navigation';
import { FiUser } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { Divider, Spin } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const LogIn = () => {
    // Use Navigate from React hooks ---------------------------------------------
    const navigate = useNavigate()
    const handleSignUpPage = () => {
        navigate('/sign-up')
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [userError, setUserError] = useState('')
    // For React form hooks ------------------------------------------------------
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const {email, password} = data;
        await signInWithEmailAndPassword(email, password)
        if(!error){
            reset();
            navigate(from, { replace: true })
            console.log(user)
        }
        else{
            return
        }
    };

    //   Condition User, Loading and Error --------------
    let load;
    if(loading){
        load = <Spin />
    }
    let logInError;
    if(error){
        logInError = <p className="text-danger fw-bold">{error?.message}</p>;
    }


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
                        <div>
                            <span className='d-flex justify-content-center'><FiUser className='log_in_icon'/></span>
                            <h4 className='text-center mt-2 mb-1'>Please Log In</h4>
                            <p className='text-center'>If you have an account, sign in with your email address.</p> 
                        </div>   
                        
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
                        <div className='d-flex justify-content-center align-items-center'>
                            {load}
                            {logInError}
                        </div>
                        <input type="submit" className='log_in_input_submit fw-semibold' />
                    </form>
                    <p className='mt-1 forget_password'>Forget Password</p>
                    <p>Don't have account Please <span onClick={handleSignUpPage} className='log_and_sign_toggole'>Sign Up</span></p>
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