import React from 'react';
import FooterSection from '../../../Shared/FooterSection/FooterSection';
import ShopProduct from '../../ShopPage/ShopProduct/ShopProduct';
import ProductPageLeftSideComponents from '../ProductPageLeftSideComponents/ProductPageLeftSideComponents';

const SpeakarsPage = () => {
    // Props for Product Page left side components ---------------------------
    const brandName = 'Speakers';
    
    return (
        <>
        {/* Main Section Laptop Page ---------------------------------------- */}
            <div className='container my-5'>
                <div className="row">
                    <ProductPageLeftSideComponents brandName={brandName}></ProductPageLeftSideComponents>
                    <div className="col-md-9">
                        <div className="shop_page_grid my-4">
                            <ShopProduct></ShopProduct>
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