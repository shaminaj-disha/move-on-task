import React, { createContext, useEffect, useState } from 'react';
import Gallery from './Gallery/Gallery';
import Products from './Products';
import './Home.css';
import Loading from './Loading';

// Context API
export const ProductContext = createContext('');

const Home = () => {
    const [products, setProducts] = useState(null);

    // fetch API using useEffect
    useEffect(() => {
        fetch('https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    // will show spinner if products not loaded
    if (!products) {
        return <Loading />
    }

    return (
        <ProductContext.Provider value={products}>
            <div className='container row row-cols-1 row-cols-md-2 mx-auto gy-4'>
                <div className='bg-success'>
                    <h2 className='text-white text-center my-2'>Image Gallery</h2>
                    <Gallery></Gallery>
                </div>
                <div>
                    <Products></Products>
                </div>
            </div>
        </ProductContext.Provider>
    );
};

export default Home;