import React from 'react';
import './Gallery.css'

const Gallery = ({ product }) => {
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