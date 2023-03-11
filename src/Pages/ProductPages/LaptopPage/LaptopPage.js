import { useQuery } from '@tanstack/react-query';
import React from 'react';
import FooterSection from '../../../Shared/FooterSection/FooterSection';
import Navigation from '../../../Shared/Navigation/Navigation';
import TopNavigation from '../../../Shared/TopNavigation/TopNavigation';
import ShopProduct from '../../ShopPage/ShopProduct/ShopProduct';
import ProductPageLeftSideComponents from '../ProductPageLeftSideComponents/ProductPageLeftSideComponents';

const LaptopPage = () => {
    // Props for Product Page left side components ---------------------------
    const brandName = 'Laptop';

    const {data,  isLoading} = useQuery({
        queryKey: ['laptopData'],
        queryFn: () => fetch(`http://localhost:5000/products/category/${brandName}`)
        .then(res => res.json())
    })

    console.log(data)
    if(isLoading){
        return isLoading;
    }

    return (
        <>
        {/* Navigation ---------------------------------------------------- */}
        <header>
            <TopNavigation></TopNavigation>
            <Navigation></Navigation>
        </header>
        {/* Main Section Laptop Page ---------------------------------------- */}
            <div className='container my-5'>
                <div className="row">
                    <ProductPageLeftSideComponents brandName={brandName}></ProductPageLeftSideComponents>
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

export default LaptopPage;