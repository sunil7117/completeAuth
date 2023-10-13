import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Forget from './components/Forget';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Register/>} />
      <Route path="/login" element={<Signin/>} />
      <Route path="/forgetpassword" element={<Forget/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
