import React, { useContext } from 'react';
import { ProductContext } from '../Home';
import './Gallery.css'

const Gallery = () => {
    const product = useContext(ProductContext);
    return (
        <div>
            {product?.gallery && (product?.gallery || []).map((img, i) =>
                <div key={i} className="responsive">
                    <div className="gallery">
                        <a target="_blank" href={img?.url} rel='noreferrer'><img src={img?.url} alt="Single Shoe" width="600" height="400" /></a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;