import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Forget from './components/Forget';
import OTPVerify from './components/OTPVerify';
import Home from './pages/Home';
import { useState } from 'react';
import UpdatePassword from './components/UpdatePassword';

function App() {
  const[isAuthenctic,setisAuthenctic]=useState(false)
  return (
    <BrowserRouter>
    <Home/>
    <Routes>
      {/* <Route path="/" element={isAuthenctic?<Home/>:<Signin/>} />
      <Route path="/signup" element={<Register/>} />
      <Route path="/login" element={<Signin/>} />
      <Route path="/forgetpassword" element={<Forget/>} />
      <Route path="/otpverification" element={<OTPVerify/>} />
      <Route path="/update-password" element={<UpdatePassword/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
