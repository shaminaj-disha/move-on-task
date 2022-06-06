import React, { createContext, useEffect, useState } from 'react';
import Gallery from './Gallery/Gallery';
import Products from './Products';

export const ProductContext = createContext('');

const Home = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch('https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    // console.log(products);
    // const productsArray = [products];
    // console.log(productsArray);
    if (!products) {
        return <div>Loading</div>
    }
    return (
        <ProductContext.Provider value={products}>
            <div className='d-flex'>
                <div className='bg-success'>
                    <h2>Image Gallery</h2>
                    {/* {productsArray && (productsArray || [])?.map((product, i) => <Gallery key={i} product={product} />)} */}
                    {/* <div className="clearfix"></div> */}
                    <Gallery></Gallery>
                </div>
                <div>
                    {/* {productsArray && (productsArray || [])?.map((product, i) => <Products key={i} product={product} />)} */}
                    <Products></Products>
                </div>
                {/* <div>
                {<Products product={products}></Products>}
            </div> */}
            </div>
        </ProductContext.Provider>
    );
};

export default Home;