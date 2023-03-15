import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { auth } from '../../Firebase.init';
import { FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';


const Admin = () => {

    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let from = "/dashboard";

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
        <div className='mt-5'>
            <div className='container d-flex justify-content-center my-5'>
                <div className="border p-4 md-w-50 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <span className='d-flex justify-content-center'><FiUser className='log_in_icon'/></span>
                            <h4 className='text-center mt-2 mb-1'>Admin Log In</h4>
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
                        {/* Password Input Field ------------------------------------------------- */}
                        <input 
                            type='password'
                            className='log_in_input'
                            placeholder='Password'
                            {...register("password", { required: true })} 
                            aria-invalid={errors.password ? "true" : "false"} 
                        />
                        {/* Password Error Message -------------------- */}
                        {errors.password && <p className='text-danger' role="alert">Password is required</p>}
                        {/* Submit Button ----------------------------------------------------- */}
                        <div className='d-flex justify-content-center align-items-center'>
                            {load}
                            {logInError}
                        </div>
                        <input type="submit" className='log_in_input_submit fw-semibold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;