import React from 'react';
import Banner from '../Banner/Banner';
import BulkProduct from '../BulkProduct/BulkProduct';
import ProductCategories from '../ProductCategories/ProductCategories';
import Products from '../Products/Products';
import ShopService from '../ShopService/ShopService';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <ProductCategories></ProductCategories>
            <BulkProduct></BulkProduct>
            <ShopService></ShopService>
        </>
    );
};

export default Home;