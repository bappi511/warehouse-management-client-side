import React from 'react';
import bulk from '../../../images/bulk-product.jpg';
import "./BulkProduct.css"
const BulkProduct = () => {
    return (
        <div className='mb-5 z-index-1'>
            <div className='position-absolute visible'>
                <button className='btn btn-light '>Bulk Buying</button>
            </div>
            <div className='position-relative'>
                <img className='img-fluid w-100' src={bulk} alt="" />
            </div>
        </div>
    );
};

export default BulkProduct;