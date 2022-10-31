import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CartPage from './Pages/CartPage/CartPage';
import 'react-multi-carousel/lib/styles.css';
import ShopPage from './Pages/ShopPage/ShopPage';
import LaptopPage from './Pages/ProductPages/LaptopPage/LaptopPage';
import SmartPhonePage from './Pages/ProductPages/SmartPhonePage/SmartPhonePage';
import CameraPage from './Pages/ProductPages/CameraPage/CameraPage';
import HeadPhonePage from './Pages/ProductPages/HeadPhonePage/HeadPhonePage';
import MonitorPage from './Pages/ProductPages/MonitorPage/MonitorPage';
import GamingPage from './Pages/ProductPages/GamingPage/GamingPage';
import SpeakarsPage from './Pages/ProductPages/SpeakarsPage/SpeakarsPage';
import PaymentCheckOut from './Pages/PaymentCheckOut/PaymentCheckOut';
import LogIn from './Shared/LogIn/LogIn';

function App() {
  return (
    <>
    {/* React Router Routes ---------------------------- */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/laptop' element={<LaptopPage/>}></Route>
        <Route path='/smartPhone' element={<SmartPhonePage/>}></Route>
        <Route path='/camera' element={<CameraPage/>}></Route>
        <Route path='/headPhone' element={<HeadPhonePage/>}></Route>
        <Route path='/monitor' element={<MonitorPage/>}></Route>
        <Route path='/speakers' element={<SpeakarsPage/>}></Route>
        <Route path='/gameing' element={<GamingPage/>}></Route>
        <Route path='/paymentCheckOut' element={<PaymentCheckOut/>}></Route>
        <Route path='/log-in' element={<LogIn/>}></Route>
      </Routes>
    </>
  );
}

export default App;
