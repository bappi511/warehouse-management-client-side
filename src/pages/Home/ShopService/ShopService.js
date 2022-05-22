import React from 'react';
import "./ShopService.css";
const ShopService = () => {
    return (
        <div className='container mb-5 text-center'>
            <h5 className='text-center'>WHY DEAL WITH US?</h5>
            <hr />
            <div className="row  g-5">
                <div className=' col-sm-12 col-md-6 col-lg-6'>
                    <i style={{ fontSize: '50px', padding: '20px' }} className="fa-solid fa-headphones border border-info rounded-circle mb-2"></i>
                    <h5>DEDICATED SERVICE</h5>
                    <p className='width '>With over 20 years experience, our specialists are ready to help.</p>
                    <button className='btn btn-light'>CONTACT US</button>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <i style={{ fontSize: '50px', padding: '20px' }} className="fa-solid fa-truck-fast border border-info rounded-circle mb-2 "></i>
                    <h5>FREE SHIPPING</h5>
                    <p className='width'>We offer a free delivery service on all purchases throughout the UK.</p>
                    <button className='btn btn-light'>TERMS & CONDITIONS</button>
                </div>
            </div>
        </div>
    );
};

export default ShopService;