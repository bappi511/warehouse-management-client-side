import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='container'>
            <div>
                <h4 className='text-left mt-4 mb-4'>FEATURED PRODUCTS</h4>
                <div className=" row">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;