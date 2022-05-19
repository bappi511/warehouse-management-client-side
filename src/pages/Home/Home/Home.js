import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <ProductCategories></ProductCategories>
        </>
    );
};

export default Home;