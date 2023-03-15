import React from 'react';
import FlashSale from '../../Componentes/FlashSale/FlashSale';
import HeroSection from '../../Componentes/HeroSection/HeroSection';
import HomePageProduct from '../../Componentes/HomePageProduct/HomePageProduct';
import OnlyHpLaptop from '../../Componentes/OnlyHpLaptop/OnlyHpLaptop';
import OurPratners from '../../Componentes/OurPratners/OurPratners';
import ShopPolicy from '../../Componentes/ShopPolicy/ShopPolicy';
import SubscribeNow from '../../Componentes/SubscribeNow/SubscribeNow';
import FooterSection from '../../Shared/FooterSection/FooterSection';

const Home = () => {
  // const [count, setCount] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(0)
  // const [itemCount, setItemCount] = useState(0)
    return (
        <>
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