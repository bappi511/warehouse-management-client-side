import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const handleProductDelete = id => {

        const procced = window.confirm('Are you sure?');
        if (procced) {
            const url = `https://polar-coast-97656.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='container mb-5'>
            <div className='table-responsive table-responsive-sm table-responsive-md'>
                <h2 className='text-center mt-3 mb-4'>Manage Your Product</h2>
                <table className="table text-center table-secondary table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    <tr key={product._id}>
                                        <td style={{ width: '15%' }}><img style={{ width: '55%' }} src={product.img} alt="" /></td>
                                        <td className='px-6 py-4'>{product.name}</td>
                                        <td className='px-6 py-4'>${product.price}</td>
                                        <td className='px-6 py-4'>{product.quantity}</td>
                                        <td className='px-6 py-4'>{product.supplier}</td>
                                        <td className='px-6 py-4'><button onClick={() => handleProductDelete(product._id)} className='btn bg-danger py-1 text-light'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='mt-3 mx-auto w-50'>
                    <Link to='/addproduct'>
                        <button className='btn btn-info w-100'>Add New Product</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;