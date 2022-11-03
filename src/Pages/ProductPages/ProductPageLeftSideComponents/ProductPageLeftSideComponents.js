import React from 'react';
import './ProductPageLeftSideComponents.css'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ProductPageLeftSideComponents = ({brandName}) => {
    return (
            <div className="col-md-3 shadow-sm rounded p-md-4">
                <div>
                    <h2 className='text-secondary fs-5'>{brandName} Brands...</h2>
                    <hr />
                    <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">Brand Name<BsArrowRight className='hero_animeted_icon'/></Link>
                    <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">Brand Name<BsArrowRight className='hero_animeted_icon'/></Link>
                    <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">Brand Name<BsArrowRight className='hero_animeted_icon'/></Link>
                    <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">Brand Name<BsArrowRight className='hero_animeted_icon'/></Link>
                    <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">Brand Name<BsArrowRight className='hero_animeted_icon'/></Link>
                    <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">Brand Name<BsArrowRight className='hero_animeted_icon'/></Link>
                    <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">Brand Name<BsArrowRight className='hero_animeted_icon'/></Link>  
                </div>
            </div>
    );
};

export default ProductPageLeftSideComponents;