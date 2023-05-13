import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='shop-container'>
            <div className='product-container'>
            <h2>Orders page: {products.length}</h2>
            </div>

            <div className='cart-container'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;