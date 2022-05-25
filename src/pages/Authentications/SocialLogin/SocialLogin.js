import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>{error?.message}</p>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} type="button" className="btn btn-link btn-floating bg-dark w-50">
                <i className="fab fa-google text-warning "><span className='text-danger'>oogle</span></i>
            </button>
        </div>
    );
};

export default SocialLogin;