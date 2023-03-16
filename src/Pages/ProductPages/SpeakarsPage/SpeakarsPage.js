import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FooterSection from '../../../Shared/FooterSection/FooterSection';
import ShopProduct from '../../ShopPage/ShopProduct/ShopProduct';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SpeakarsPage = () => {
    // Props for Product Page left side components ---------------------------
    const brandName = 'Speakers';

    const {data,  isLoading} = useQuery({
        queryKey: ['speakersData'],
        queryFn: () => fetch(`http://localhost:5000/products/category/Speakers`)
        .then(res => res.json())
    })

    if(isLoading){
        return isLoading;
    }
    
    return (
        <>
        {/* Main Section Laptop Page ---------------------------------------- */}
            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-3">
                        <div  className='shadow-sm rounded p-md-4 sticky-top'>
                        <h2 className='text-secondary fs-5'>Laptop Brands...</h2>
                        <hr />
                            {
                                data.map(brandName => <Link className='text-black py-2 px-4 shadow-sm my-1 d-block rounded text_hover_color' to="laptop">{brandName.inputBrandData}<BsArrowRight className='hero_animeted_icon'/></Link>)
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="shop_page_grid my-4">
                            {
                                data.map(product => <ShopProduct key={product._id} product={product}></ShopProduct>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        {/* Footer Section ---------------------------------------------------------- */}
        <footer  className='footer_color mt-4'>
            <FooterSection></FooterSection>
        </footer>
        </>
    );
};

export default SpeakarsPage;