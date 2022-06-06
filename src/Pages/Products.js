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
    // const discountedProductPrice = (((product?.price?.old - product?.price?.discounted) / product?.price?.old) * 100);
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
    }
    const selectSize = (id, title) => {
        setSizeId(id);
        setSizeTitle(title);
    }
    // console.log(shoeColorId,shoeSizeId);
    const shoeSkus = (product?.variation?.skus).find(prop => (prop.props[0] === colorId) && (prop.props[1] === sizeId));
    // console.log(shoeSkus);

    const shoeColorTitle = (product?.variation?.props[0].values).find(value => value.title === colorTitle);
    const shoeSizeTitle = (product?.variation?.props[1].values).find(value => value.title === sizeTitle);
    // console.log('Shoe Color Title', shoeColorTitle);

    const discountedPrice = (((shoeSkus?.price?.old - shoeSkus?.price?.discounted) / shoeSkus?.price?.old) * 100);

    return (
        <div>
            <h1>{product?.title}</h1>
            {/* <h1>{product?.price?.discounted}</h1>
            <h1>{product?.price?.old}</h1>
            <h1>{discountedPrice.toFixed(2)}%</h1> */}
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
                    shoeSkus &&
                    <div>
                        <h1>Price: <span>{shoeSkus?.price?.discounted}</span> <span>{shoeSkus?.price?.old}</span> <span>({discountedPrice.toFixed(2)})% OFF</span></h1>
                    </div>
                    // :
                    // <div>
                    //     <h1>{product?.price?.discounted}</h1>
                    //     <h1>{product?.price?.old}</h1>
                    //     <h1>{discountedProductPrice.toFixed(2)}%</h1>
                    // </div>
                }
            </div>
            <div>
                <div><h1>{product?.variation?.props[0]?.name} : {shoeColorTitle?.title}</h1></div>
                {
                    color.map((shoe, index) => <div><img onClick={() => selectColor(shoe.id, shoe.title)} key={index} className='border border-2' src={shoe.thumb} alt="" /></div>)
                }
            </div>
            <div>
                <div><h1>{product?.variation?.props[1]?.name} : {shoeSizeTitle?.title}</h1></div>
                {
                    size.map((shoe, index) =>
                        <div onClick={() => selectSize(shoe.id, shoe.title)} key={index} className=''><p className='border border-2' style={{ width: "100px" }}>{shoe.title}</p></div>)
                }
            </div>
        </div>
    );
};

export default Products;