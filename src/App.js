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
// import Shop from './pages/Shop';
// import Blog from './pages/Blog';
// import Error from './pages/Error';
function App() {
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute Rout={Home} />} />
      <Route path="/home" element={<ProtectedRoute Rout={Home} />} />
      <Route path="/signup" element={<Register/>} />
      <Route path="/login" element={<Signin/>} />
      <Route path="/forgetpassword" element={<Forget/>} />
      <Route path="/otpverification" element={<OTPVerify/>} />
      <Route path="/update-password" element={<UpdatePassword/>} />
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/shop' element={<Shop/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='*' element={<Error/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
