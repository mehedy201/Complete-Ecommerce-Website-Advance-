import React from 'react';
import './ProductPageLeftSideComponents.css'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ProductPageLeftSideComponents = ({brandName, category}) => {
    return (

                <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">{brandName.inputBrandName}<BsArrowRight className='hero_animeted_icon'/></Link>
    );
};

export default ProductPageLeftSideComponents;