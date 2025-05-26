import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollTop from './ScrollTop';

const App = () => {

  return (
    <>
      <ScrollTop/>
      <Navbar/>
       <Routes>
        <Route element={<Home/>} index />
        <Route element={<Cart/>} path='/shopping-cart'/>
        <Route element={<Orders/>} path='/shopping-orders'/>
        <Route element={<Product/>} path='/view-product/:id'/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
