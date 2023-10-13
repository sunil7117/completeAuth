import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Register/>} />
      <Route path="/login" element={<Signin/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
