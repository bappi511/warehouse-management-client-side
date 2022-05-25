import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error.message}</p>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    // if (sending) {
    //     return <Loading></Loading>
    // }
    const handleSubmit = event => {
        console.log(error);
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };
    const navigateRegister = () => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        } else {
            toast('Please Enter Your Email');
        }
    }
    return (
        <div className='container'>
            <div style={{ width: '45%' }} className=' mx-auto  mb-2'>
                <h4 className='text-info text-center mb-4 mt-4'>Please Login Here !!</h4>
                <form onSubmit={handleSubmit}>
                    {/*  Email input  */}
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input ref={emailRef} type="email" name='email' placeholder='Email' required id="form2Example1" className="form-control bg-light" />
                    </div>

                    {/* Password input*/}
                    <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input ref={passwordRef} type="password" name="password" placeholder='Password' required id="form2Example2" className="form-control bg-light" />

                    </div>

                    {/*  2 column grid layout for inline styling  */}
                    <div className="row mb-3">
                        <div className="col">
                            {/*  Simple link  */}
                            <button onClick={resetPassword} className='btn py-1 btn-link outline-0 text-primary text-decoration-none'>Forgot password?</button>
                        </div>
                    </div>
                    {errorElement}

                    {
                        loading && <Loading />
                    }
                    {/*  Submit button  */}
                    <input type="submit" value="Login" className="btn btn-primary w-100 mb-4" />

                    {/* Register buttons */}
                    <div className="text-center">
                        <p>Not a member? <Link to='/register' onClick={navigateRegister} className='text-primary text-decoration-none'>Register</Link></p>
                        <p>or sign in with:</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;