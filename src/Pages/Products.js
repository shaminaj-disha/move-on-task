import React, { useContext, useState } from 'react';
import { ProductContext } from './Home';

const Products = () => {
    // using Context API
    const product = useContext(ProductContext);

    // declaring states
    const [colorId, setColorId] = useState(null);
    const [colorTitle, setColorTitle] = useState(null);
    const [sizeId, setSizeId] = useState(null);
    const [sizeTitle, setSizeTitle] = useState(null);

    const discountedProductPrice = (((product?.price?.old - product?.price?.discounted) / product?.price?.old) * 100);
    const color = product?.variation?.props[0].values;
    const size = product?.variation?.props[1].values;

    // setting image based on color
    const selectColor = (id, title) => {
        setColorId(id);
        setColorTitle(title);
    };

    // setting sizes
    const selectSize = (id, title) => {
        setSizeId(id);
        setSizeTitle(title);
    };

    // finding the sku for selected color and size
    const shoeSkus = (product?.variation?.skus).find(prop => (prop.props[0] === colorId) && (prop.props[1] === sizeId));

    // finding object from selected shoe color and size
    const shoeColorTitle = (product?.variation?.props[0].values).find(value => value.title === colorTitle);
    const shoeSizeTitle = (product?.variation?.props[1].values).find(value => value.title === sizeTitle);

    // finding object for shoe pic based on sku
    const shoePic = (product?.variation?.props[0].values).find(value => value.id === shoeSkus?.props[0]);
    console.log(shoePic);

    // calculation of the discount from the old and discounted value
    const discountedPrice = (((shoeSkus?.price?.old - shoeSkus?.price?.discounted) / shoeSkus?.price?.old) * 100);

    return (
        <div>
            {/* shoe title */}
            <div className='bg-warning'><h3 className='p-3'>{(product?.title).substr(0, 23)}</h3></div>
            <div>
                {/* price section */}
                {
                    shoeSkus ?
                        <div className='bg-light p-3 my-4'>
                            <h3>Price: <span className='fw-bold me-2'>RS. {shoeSkus?.price?.discounted}</span> <span className='text-decoration-line-through text-muted me-2'>{shoeSkus?.price?.old}</span> <span className='text-danger'>({discountedPrice.toFixed(2)})% OFF</span></h3>
                        </div>
                        :
                        <div className='bg-light p-3 my-4'>
                            <h3>Price: <span className='fw-bold me-2'>RS. {product?.price?.discounted}</span> <span className='text-decoration-line-through text-muted me-2'>{product?.price?.old}</span> <span className='text-danger'>({discountedProductPrice.toFixed(2)}% OFF)</span></h3>
                        </div>
                }
            </div>
            {/* select color section */}
            <div className='bg-light p-3'>
                <h4 className='bg-secondary text-white px-2 mb-3'>Select a color</h4>
                <div>{shoeColorTitle && <h5><span className='text-secondary'>{product?.variation?.props[0]?.name}</span> : {shoeColorTitle?.title}</h5>}</div>
                <div className='d-flex'>
                    {
                        color.map((shoe, index) => <div><img className='me-2' style={{
                            borderColor: colorId === shoe.id ? 'GoldenRod' : 'LightGrey',
                            borderStyle: colorId === shoe.id ? 'solid' : 'solid'
                        }} onClick={() => selectColor(shoe.id, shoe.title)} key={index} src={shoe.thumb} alt="" /></div>)
                    }
                </div>
            </div>
            {/* select size section */}
            <div className='bg-light p-3 mt-4'>
                <h4 className='bg-secondary text-white px-2 mb-3'>Select a size</h4>
                <div>{shoeSizeTitle && <h5><span className='text-secondary'>{product?.variation?.props[1]?.name}</span>: {shoeSizeTitle?.title}</h5>}</div>
                <div className='row row-cols-2 row-cols-lg-4 gy-2'>
                    {
                        size.map((shoe, index) =>
                            <div onClick={() => selectSize(shoe.id, shoe.title)} key={index} className='col'><p style={{
                                borderColor: sizeId === shoe.id ? 'GoldenRod' : 'LightGrey',
                                borderStyle: sizeId === shoe.id ? 'solid' : 'solid',
                                width: "100px"
                            }}
                                className='bg-light text-center'>{shoe.title}</p></div>)
                    }
                </div>
                {/* image based on sku section */}
            </div>
            {
                (shoeSkus?.props[0] === colorId) &&
                <div className='bg-light p-3 mt-4 d-flex justify-content-center align-items-center'>
                    <img height="300px" src={shoePic.image} alt="" />
                </div>
            }
        </div>
    );
};

export default Products;