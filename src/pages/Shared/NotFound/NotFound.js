import React from 'react';
import searching from '../../../images/404-error.gif';
const NotFound = () => {
    return (
        <div>
            <div style={{ width: '70%' }} className='mx-auto'>
                <img className='img-fluid' src={searching} alt="" />
            </div>
        </div>
    );
};

export default NotFound;