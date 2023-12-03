import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Checkout from './pages/Checkout';import BlogDetails from './pages/BlogDetails';
;
// import Error from './pages/Error';
function App() {
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/home" element={<ProtectedRoute Rout={Home} />} /> */}
      <Route path="/signup" element={<Register/>} />
      <Route path="/login" element={<Signin/>} />
      <Route path="/forgetpassword" element={<Forget/>} />
      <Route path="/otpverification" element={<OTPVerify/>} />
      <Route path="/update-password" element={<UpdatePassword/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shoping-cart' element={<ShoppingCart/>}/>
      <Route path='/shopping-details' element={<ShoppingDetails/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/blog-details' element={<BlogDetails/>}/>
      {/* <Route path='*' element={<Error/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
