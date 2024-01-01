import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Forget from './components/Forget';
import OTPVerify from './components/OTPVerify';
import Home from './pages/Home';
import UpdatePassword from './components/UpdatePassword';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import ShoppingCart from './pages/ShoppingCart';
import ShoppingDetails from './pages/ShoppingDetails';
import Checkout from './pages/Checkout';
import BlogDetails from './pages/BlogDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, getCart, getallproducts, redirect } from './service/api';
import { getProduct, loadingProduct } from './redux/dataSlice';
import { addresslist, cartadd, getColor, getTag, redirectStart, redirectSuccess } from './redux/loginSlice';
import AdminHome from './components/admin/AdminHome';
import PlaceOrder from './pages/PlaceOrder';

// import Error from './pages/Error';
function App() {
  const {getuser,auth}=useSelector(state=>state.login)
  const dispatch= useDispatch()
   useEffect(() => {
    // get all product on page loading
    const allproducts = async () => {
      try {
        dispatch(loadingProduct())
        const data = await getallproducts();
        dispatch(getProduct(data.data))
        console.log(data.data)
        const productTag=data?.data.map(product=>product.product_tag)
        const productColor=data?.data.map(product=>product.product_color)
        const tags = [...new Set(productTag)];
        const colors = [...new Set(productColor)];
        dispatch(getTag(tags))
        dispatch(getColor(colors))
        
      } catch (error) {}
    };
    allproducts();
    
    //user authentication for user redirect to page without login 
    const userRedirect=async(id)=>{
      const refreshToken=localStorage.getItem('refresh-token')
      const token=refreshToken?.split(" ").pop()
      if(token){
        dispatch(redirectStart())
        const redirectUser=await redirect(token)
        dispatch(redirectSuccess(redirectUser.data))
        if(auth){
          const cartdata=await getCart(id)
          dispatch(cartadd(cartdata.data))
        }else{
          console.log("pahle login kijiye")
        }
      }else{
        console.log("apke pass token nhi hai pahle token lijiye")
      }
    }
    userRedirect(getuser?.cart)

    // get all user save addressed
    const getaddress=async()=>{
      try {
        const address=await getAddress(getuser?.addresslist)
        dispatch(addresslist(address.data?.addresslists))
      } catch (error) {
        
      }
    }
    getaddress()
  },[dispatch,auth,getuser?.cart,getuser?.addresslist] );
  return (
      
    <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<Register/>} />
      <Route path="/login" element={<Signin/>} />
      <Route path="/forgetpassword" element={<Forget/>} />
      <Route path="/otpverification" element={<OTPVerify/>} />
      <Route path="/update-password" element={<UpdatePassword/>} />
      {/* ========================================================= */}
     <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shoping-cart/' element={<ShoppingCart/>}/>
      <Route path='/shopping-details' element={<ShoppingDetails/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/blog-details' element={<BlogDetails/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/order-placed' element={<PlaceOrder/>}/>
      {/* <Route path='*' element={<Error/>}/>*/}
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
