import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductInfo = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleUpdateItem = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const updatedItem = { quantity };

        // send data to the server;
        const url = `http://localhost:5000/product/${productId}`;
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
    return (
        <div className="container">
            <div className='border border-danger p-4 mb-5  row'>
                <div className='col-md-6'>
                    <img className='w-75' src={product.img} alt="" />
                    <h5><small> {product.description}</small> </h5>
                    <h5>Name: {product.name} </h5>
                    <h5>price: $ {product.price}</h5>
                    <h5>Quantity: {product.quantity}</h5>
                    <h5>supplier: {product.supplier}</h5>
                </div>
                <div className="col-md-6">
                    <h4 className='bg-dark text-light text-center p-2'>available product</h4>
                    <p className="fw-bold text-center border p-2">{product.quantity}</p>
                    <form onSubmit={handleUpdateItem}>
                        <input className='w-100 py-1' type="text" name='quantity' placeholder='quantity' /> <br />
                        <input className='btn btn-info w-100 mt-2 ' type="submit" value="Restock" />
                    </form>
                </div>
                <div className='text-center'>
                    <Link to='/checkout'>
                        <button className='btn btn-primary'>Procced Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;