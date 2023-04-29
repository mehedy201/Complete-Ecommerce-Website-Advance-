import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CART_CONTEXT } from '../../App';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import ProductCardComponents from '../../Shared/ProductCardComponents/ProductCardComponents';

const SearchPage = () => {

    const { searchProduct } = useContext(CART_CONTEXT);
    const navigate = useNavigate();
    const handleBuyNowButton = (id) => {
        navigate(`/single-product/${id}`)
    }
    return (
        <>
            <div className='container my-5'>
                <div className='for_grid mt-3'>
                    {
                        searchProduct &&
                        searchProduct.map(product => <ProductCardComponents key={product._id} product={product} handleBuyNowButton={handleBuyNowButton} />) 

                    }
                </div>
            </div>
            {/* Footer Section ---------------------------------------------------------- */}
            <footer  className='footer_color mt-4'>
                <FooterSection></FooterSection>
            </footer>
        </>
    );
};

export default SearchPage;