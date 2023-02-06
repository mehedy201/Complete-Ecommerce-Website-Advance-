import React, { useEffect } from 'react';
import './RegistretionPage.css'
import { useForm } from "react-hook-form";
import FooterSection from '../FooterSection/FooterSection';
import TopNavigation from '../TopNavigation/TopNavigation';
import Navigation from '../Navigation/Navigation';
import { MdAppRegistration } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { Divider, Spin } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


const RegistretionPage = () => {
    // Use Navigate from React hooks ---------------------------------------------
    const navigate = useNavigate()
    const handleLogInPage = () => {
        navigate('/log-in')
    }


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    // Update Profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // For React form hooks ---------------------
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const {email, password, name} = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        reset();
        navigate(from, { replace: true })
        console.log(user)
    };

    //   Condition User, Loading and Error --------------
    let load;
    if(loading || updating){
        load = <Spin />
    }

    
    let logInError;
    if(error || updateError){
        logInError = <p className="text-danger fw-bold">{error?.message} {updateError?.message}</p>;
    }

    return (
        <>
        {/* Navigation ------------------------------------------------------------------------------------ */}
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Form Section ---------------------------------------------------------------------------------- */}
            <div className='container'>
                <div className='d-flex justify-content-center my-5'>
                    <div className="border p-4 registration_width rounded">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <span className='d-flex justify-content-center'><MdAppRegistration className='log_in_icon'/></span>
                            <h4 className='text-center mt-2 mb-1'>Please Sign Up</h4>
                            <p className='text-center'>Create Account and stay with us</p>  
                            {/* Name Input Field ------------------------------------------------   */}
                            <input
                                type="text"
                                name='name'
                                className='log_in_input mt-2'
                                placeholder='Your Name'
                                {...register('name', {required: true})}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {/* Name Error Message ----------------------- */}
                            {errors.name?.type === 'required' && <p className='text-danger' role="alert">Name is required</p>}
                            {/* Email Input Field ------------------------------------------------- */}
                            <input 
                                type='email'
                                className='log_in_input'
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
                        <p className='mt-2'>If have account Please <span onClick={handleLogInPage} className='log_and_sign_toggole'>Log In</span></p>
                        <Divider>Register With Social</Divider>
                        <div className='d-flex justify-content-center'>
                            <BsGithub className='sign_up_icon'/>
                            <FaGoogle className='sign_up_icon'/>
                        </div>
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

export default RegistretionPage;