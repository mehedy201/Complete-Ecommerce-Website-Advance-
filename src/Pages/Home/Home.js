import React from 'react';
import HeroSection from '../../Componentes/HeroSection/HeroSection';
import HomePageProduct from '../../Componentes/HomePageProduct/HomePageProduct';
import ShopPolicy from '../../Componentes/ShopPolicy/ShopPolicy';
import Navigation from '../../Shared/Navigation/Navigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';

const Home = () => {
    return (
        <>
            <header>
                 <TopNavigation></TopNavigation>
                 <Navigation></Navigation>
            </header>
            <main>
                <HeroSection></HeroSection>
                <ShopPolicy></ShopPolicy>
                <HomePageProduct></HomePageProduct>
            </main>
        </>
    );
};

export default Home;