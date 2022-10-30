import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CartPage from './Pages/CartPage/CartPage';
import 'react-multi-carousel/lib/styles.css';
import ShopPage from './Pages/ShopPage/ShopPage';
import LaptopPage from './Pages/ProductPages/LaptopPage/LaptopPage';

function App() {
  return (
    <>
    {/* React Router Routes ---------------------------- */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/laptop' element={<LaptopPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
