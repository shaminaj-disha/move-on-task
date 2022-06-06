import React, { useState } from 'react';

const Products = ({ product }) => {
    // const [productColor, setProductColor] = useState();
    const discountedPrice = (((product?.price?.old - product?.price?.discounted) / product?.price?.old) * 100);
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

    return (
        <div>
            <h1>{product?.title}</h1>
            <h1>{product?.price?.discounted}</h1>
            <h1>{product?.price?.old}</h1>
            <h1>{discountedPrice.toFixed(2)}%</h1>
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
                    color.map((shoe, index)=> <img key={index} className='border border-2' src={shoe.thumb} alt="" />)
                }
            </div>
            <div>
                {
                    size.map((shoe, index)=>
                        <div key={index} className=''><p className='border border-2' style={{width: "100px"}}>{shoe.title}</p></div>)
                }
            </div>
        </div>
    );
};

export default Products;