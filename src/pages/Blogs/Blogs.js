import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <h2 className='mt-3 mb-3'>All Three Questions:</h2>
            <div className='mb-3'>
                <h5 className='mb-3'>1. Difference between javascript and node js?</h5>
                <h5 className='mb-3'>2.  When should you use nodejs and when should you use mongodb?</h5>
                <h5 className='mb-3'>3. Differences between sql and nosql databases?</h5>
            </div>
            <button onClick={() => navigate('/blog')} className='btn btn-info mt-3 mb-3'>Answers</button>
        </div>
    );
};

export default Blogs;