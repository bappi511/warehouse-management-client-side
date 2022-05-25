import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import "./Product.css";
const Product = ({ product }) => {
    const { _id, name, price, img, description, supplier, quantity } = product;
    const navigate = useNavigate()
    const navigateToProductDetail = id => {
        console.log(id);
        navigate(`/product/${id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mb-4 mt-0'>
            <div className='product rounded p-2'>
                <img className='w-100' src={img} alt="" />
                <h4 className='mt-2'>{name}</h4>
                <p><span className='fw-bold'>Price: </span>${price}</p>
                <p><span className='fw-bold'>Quantity:</span> {quantity}</p>
                <p><span className='fw-bold'>Supplier:</span> {supplier}</p>
                <p className=''><small className='fonts'>{description}</small></p>
                <button onClick={() => navigateToProductDetail(_id)} className="btn btn-primary">Manage</button>
            </div>
        </div>
    );
};

export default Product;