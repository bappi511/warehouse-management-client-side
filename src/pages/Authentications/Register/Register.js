import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const location = useLocation();
    let from = location.state?.from.pathname || "/";

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigateLogin = () => {
        navigate('/login');
    };
    let errorElement;
    if (error || updateError) {
        errorElement = <div>
            <p className='text-danger'>Error:{error.message}</p>
        </div>
    }
    if (updating) {
        return <Loading></Loading>
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.currentvalue;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate(from, { replace: true });
        toast('Updated profile');
    };
    return (
        <div className='container'>
            <div style={{ width: '45%' }} className=' mx-auto  mb-2'>
                <h4 className='text-info text-center mb-4 mt-4'>Please Register Here !!</h4>
                <form onSubmit={handleRegister}>
                    {/*  Email input  */}
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                        <input ref={nameRef} type="name" name='email' placeholder='Name' required id="form2Example1" className="form-control bg-light" />
                    </div>
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input ref={emailRef} type="email" name='email' placeholder='Email' required id="form2Example1" className="form-control bg-light" />
                    </div>

                    {/* Password input*/}
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input ref={passwordRef} type="password" name="password" placeholder='Password' required id="form2Example2" className="form-control bg-light" />

                    </div>

                    {errorElement}

                    {
                        loading && <Loading />
                    }
                    {/*  Submit button  */}
                    <input type="submit" value="Register" className="btn btn-primary w-100 mb-4" />

                    {/* Register buttons */}
                    <div className="text-center">
                        <p>Already a member? <Link to='/register' onClick={navigateLogin} className='text-primary text-decoration-none'>Login</Link></p>
                        <p>or sign up with:</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;