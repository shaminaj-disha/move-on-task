import React, { useContext, useState } from 'react';
import { ProductContext } from './Home';

const Products = () => {
    const product = useContext(ProductContext);
    // console.log(product);
    // const [productColor, setProductColor] = useState();
    const [colorId, setColorId] = useState(null);
    const [colorTitle, setColorTitle] = useState(null);
    const [sizeId, setSizeId] = useState(null);
    const [sizeTitle, setSizeTitle] = useState(null);
    // const [isActive, setIsActive] = useState(false);
    const discountedProductPrice = (((product?.price?.old - product?.price?.discounted) / product?.price?.old) * 100);
    // const productArray = [product];
    // console.log(productArray);
    // console.log(productArray[0]?.variation?.props[0]);
    // const handleSelect = event => {
    //     event.preventDefault();
    //     const color = event.target.color.value;
    //     setProductColor(color);
    // }
    // console.log(productColor);
    const color = product?.variation?.props[0].values;
    const size = product?.variation?.props[1].values;
    // const findShoeColor = ((productArray && productColor) && (productArray || [])?.map(product => ((product?.variation?.props || []).map(property => ((property?.values || []).filter(value=> (value?.title === {productColor})))))));
    // console.log(findShoeColor[0]);

    const selectColor = (id, title) => {
        setColorId(id);
        setColorTitle(title);
        // setIsActive(current => !current);
    };
    const selectSize = (id, title) => {
        setSizeId(id);
        setSizeTitle(title);
        // setIsActive(current => !current);
    };
    // const handleSelect = () => {
    //     setIsActive(current => !current);
    // };
    // console.log(shoeColorId,shoeSizeId);
    const shoeSkus = (product?.variation?.skus).find(prop => (prop.props[0] === colorId) && (prop.props[1] === sizeId));
    // console.log(shoeSkus);

    const shoeColorTitle = (product?.variation?.props[0].values).find(value => value.title === colorTitle);
    const shoeSizeTitle = (product?.variation?.props[1].values).find(value => value.title === sizeTitle);
    // console.log('Shoe Color Title', shoeColorTitle);

    const discountedPrice = (((shoeSkus?.price?.old - shoeSkus?.price?.discounted) / shoeSkus?.price?.old) * 100);

    return (
        <div>
            <div className='bg-warning'><h3 className='p-3'>{(product?.title).substr(0, 23)}</h3></div>
            {/* <div className='bg-light p-3 my-4'>
                <h3>Price: <span className='fw-bold'>RS. {product?.price?.discounted}</span> <span className='text-decoration-line-through text-muted'>{product?.price?.old}</span> <span className='text-danger'>({discountedProductPrice.toFixed(2)}% OFF)</span></h3>
            </div> */}
            {/* <form onSubmit={handleSelect} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <select name="color" className="form-select">
                    {
                        productArray && ((productArray || [])?.map(product => ((product?.variation?.props || []).map(property => ((property?.values || []).map((value, index) => <option key={index} value={value.title}>{value.title}</option>))))))
                    }
                </select>
                <input type="submit" value="Select" className="btn btn-success" />
            </form>
            {
                productArray && ((productArray || [])?.map(product => ((product?.variation?.props || []).map(property => ((property?.values || []).map((value, index) => (value?.title === 'Black') && <img key={index} src={value?.image} alt={value?.title} />))))))
            } */}
            <div>
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
            <div className='bg-light p-3 mt-4'>
                <h4 className='bg-secondary text-white px-2 mb-3'>Select a size</h4>
                <div>{shoeSizeTitle && <h5><span className='text-secondary'>{product?.variation?.props[1]?.name}</span>: {shoeSizeTitle?.title}</h5>}</div>
                <div className='row row-cols-2 row-cols-md-4 gy-2'>
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
            </div>
        </div>
    );
};

export default Products;