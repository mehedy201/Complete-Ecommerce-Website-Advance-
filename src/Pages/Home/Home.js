import React from 'react';
import FlashSale from '../../Componentes/FlashSale/FlashSale';
import HeroSection from '../../Componentes/HeroSection/HeroSection';
import HomePageProduct from '../../Componentes/HomePageProduct/HomePageProduct';
import OnlyHpLaptop from '../../Componentes/OnlyHpLaptop/OnlyHpLaptop';
import OurPratners from '../../Componentes/OurPratners/OurPratners';
import ShopPolicy from '../../Componentes/ShopPolicy/ShopPolicy';
import SubscribeNow from '../../Componentes/SubscribeNow/SubscribeNow';
import FooterSection from '../../Shared/FooterSection/FooterSection';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';

const Home = () => {
    return (
        <>
            {/* Header Section -------------------------------- */}
            <header>
              <TopNavigation></TopNavigation>
              <Navigation></Navigation>
            </header>
            {/* Website main Part of home page ---------------- */}
            <main>
                <HeroSection></HeroSection>
                <ShopPolicy></ShopPolicy>
                <HomePageProduct></HomePageProduct>
                <FlashSale></FlashSale>
                <SubscribeNow></SubscribeNow>
                <OnlyHpLaptop></OnlyHpLaptop>
                <OurPratners></OurPratners>
            </main>
            {/* Footer Section ---------------------------------- */}
            <footer className='footer_color mt-4'>
              <FooterSection></FooterSection>
            </footer>
        </>
    );
};

export default Home;