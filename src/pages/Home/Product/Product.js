import React from 'react';
import "./Product.css"
const Product = ({ product }) => {
    const { _id, name, price, img, description, supplier } = product;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mb-4 mt-0'>
            <div className='product rounded p-2'>
                <img className='w-100' src={img} alt="" />
                <h4 className='mt-2'>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>{description}</small></p>
                <button className="btn btn-primary">Manage</button>
            </div>
        </div>
    );
};

export default Product;