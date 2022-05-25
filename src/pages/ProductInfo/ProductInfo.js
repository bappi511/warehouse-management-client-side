import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useUpdateProduct from '../hooks/useUpdateProduct';

const ProductInfo = () => {
    const { productId } = useParams();
    const [product] = useUpdateProduct({});

    const handleUpdateItem = event => {

        event.preventDefault();
        const getQuantityValue = JSON.parse(event.target.quantity.value);
        const quantity = product.quantity + getQuantityValue;
        const updatedItem = { quantity };

        // send data to the server;
        const url = `https://polar-coast-97656.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedItem)

        })
            .then(res => res.json())
            .then(data => {
                alert('quantity added succsessfuly')
                console.log('success', data);
                event.target.reset();
            })
    }
    const handleQuantity = () => {
        const quantity = JSON.parse(product.quantity - 1);
        const updatedItem = { quantity };
        // send data to the server;
        const url = `https://polar-coast-97656.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedItem)

        })
            .then(res => res.json())
            .then(data => {
                alert('Delivered succsessfuly')

            })
    }
    return (
        <div className="container">
            <div className='border p-4 mb-5 gy-4 gx-4  row'>
                <div className='col-md-6'>
                    <img className='w-75' src={product.img} alt="" />
                    <h5><small className='fonts'> {product.description}</small> </h5>
                    <h5>Name: <span className='text-primary fonts'>{product.name}</span> </h5>
                    <h5>Price: <span className='text-secondary'>${product.price}</span></h5>
                    <h5>Quantity: <span className='text-secondary'>{product.quantity}</span></h5>
                    <h5>Supplier: <span className='text-secondary'>{product.supplier}</span></h5>
                </div>
                <div className="col-md-6">
                    <h4 className='bg-dark text-light text-center p-2'>Available Product</h4>
                    <p className="fw-bold text-center border p-2">{product.quantity}</p>
                    <form onSubmit={handleUpdateItem}>
                        <input className='w-100 py-1' type="text" name='quantity' placeholder='quantity' /> <br />
                        <input className='btn btn-info w-100 mt-2 ' type="submit" value="Restock" />
                    </form>
                    <div className='mt-3'>

                        <button className='btn btn-primary w-100' onClick={() => handleQuantity(product.quantity)}>Delivered</button>
                    </div>
                    <div className='mt-3'>
                        <Link to='/manageproduct'>
                            <button className='btn btn-warning w-100'>Manage Inventories</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductInfo;