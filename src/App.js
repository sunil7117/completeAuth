import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes,Outlet } from 'react-router-dom';
import Signin from './components/Signin';
import Forget from './components/Forget';
import OTPVerify from './components/OTPVerify';
import Home from './pages/Home';
import UpdatePassword from './components/UpdatePassword';
import ProtectedRoute from './ProtectedRoute';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import ShoppingCart from './pages/ShoppingCart';
import ShoppingDetails from './pages/ShoppingDetails';
import Checkout from './pages/Checkout';
import BlogDetails from './pages/BlogDetails';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts } from './service/api';
import ProductCount from './contextapi/ProductCount';
import { AuthContext } from './contextapi/AuthContext';
import { getProduct, loadingProduct } from './redux/dataSlice';
import AuthLayout from './AuthLayout';
;
// import Error from './pages/Error';
function App() {
  const dispatch= useDispatch()
   useEffect(() => {
    const allproducts = async () => {
      try {
        dispatch(loadingProduct())
        const data = await getallproducts();
        dispatch(getProduct(data.data))
        
      } catch (error) {}
    };
    allproducts();
  }, );
    return (
      
    <BrowserRouter>
     <Routes>
      {/*<Route path="/" element={<AuthLayout/>}>
      <Route path="home" element={<Home/>} />
      <Route path='blog' element={<Blog/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='shop' element={<Shop/>}/>  
      </Route> */}
      <Route path="/signup" element={<Register/>} />
      <Route path="/login" element={<Signin/>} />
      <Route path="/forgetpassword" element={<Forget/>} />
      <Route path="/otpverification" element={<OTPVerify/>} />
      <Route path="/update-password" element={<UpdatePassword/>} />
      {/* ========================================================= */}
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shoping-cart/' element={<ShoppingCart/>}/>
      <Route path='/shopping-details' element={<ShoppingDetails/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/blog-details' element={<BlogDetails/>}/> 
      {/* <Route path='*' element={<Error/>}/>*/}
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
