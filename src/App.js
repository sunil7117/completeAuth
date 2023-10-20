import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Forget from './components/Forget';
import OTPVerify from './components/OTPVerify';
import Home from './pages/Home';
import UpdatePassword from './components/UpdatePassword';
import ProtectedRoute from './ProtectedRoute';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
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
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
