import React from 'react';
import MainNavigation from '../../Shared/MainNavigation/MainNavigation';
import TopNavigation from '../../Shared/TopNavigation/TopNavigation';

const Home = () => {
    return (
        <>
            <header>
                 <TopNavigation></TopNavigation>
                 <MainNavigation></MainNavigation>
            </header>
        </>
    );
};

export default Home;