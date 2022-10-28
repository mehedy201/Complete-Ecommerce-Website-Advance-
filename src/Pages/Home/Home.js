import React from 'react';
import HeroSection from '../../Componentes/HeroSection/HeroSection';
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
            </main>
        </>
    );
};

export default Home;