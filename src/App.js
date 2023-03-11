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
import RegistretionPage from './Shared/RegistretionPage/RegistretionPage';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import DashBoard from './AdminPages/DashBoard/DashBoard';
import AddProduct from './AdminPages/AddProduct/AddProduct';
import DashBoardMain from './AdminPages/DashBoardMain/DashBoardMain';
import ManageProduct from './AdminPages/ManageProduct/ManageProduct';
import ManageOrder from './AdminPages/ManageOrder/ManageOrder';
import EditProduct from './AdminPages/ManageProduct/EditProduct';
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export const CART_CONTEXT = createContext()

function App() {

  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const value = {count, setCount, totalPrice, setTotalPrice, itemCount, setItemCount };

  return (
    <>
    {/* React Router Routes ---------------------------- */}
      <CART_CONTEXT.Provider value={value}>
      <Routes>
        {/* Web site Front End ---------------------------------------------------------------------------- */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/single-product/:id' element={<SingleProduct/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/laptop' element={<LaptopPage/>}></Route>
        <Route path='/smartPhone' element={<SmartPhonePage/>}></Route>
        <Route path='/camera' element={<CameraPage/>}></Route>
        <Route path='/headPhone' element={<HeadPhonePage/>}></Route>
        <Route path='/monitor' element={<MonitorPage/>}></Route>
        <Route path='/speakers' element={<SpeakarsPage/>}></Route>
        <Route path='/drone' element={<GamingPage/>}></Route>
        <Route path='/payment-check-out' element={<PaymentCheckOut/>}></Route>
        <Route path='/log-in' element={<LogIn/>}></Route>
        <Route path='/sign-up' element={<RegistretionPage/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        {/* Admin Pages ----------------------------------------------------------------------------------- */}
        <Route path='/dashboard' element={<DashBoard/>}>
          <Route index element={<DashBoardMain/>}/>
          <Route path='add-product' element={<AddProduct/>}/>
          <Route path='edit-product/:id' element={<EditProduct/>}/>
          <Route path='manage-product' element={<ManageProduct/>}/>
          <Route path='manage-order' element={<ManageOrder/>}/>
        </Route>
      </Routes>
      </CART_CONTEXT.Provider>
      <Toaster />
    </>
  );
}

export default App;
