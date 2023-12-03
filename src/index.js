import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContext } from './contextapi/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Root=()=>{
  const[auth,setauth]=useState(null)
  const[loginstate,setloginstate]=useState("login")
return(<React.StrictMode>
  <AuthContext.Provider value={{auth:auth,setauth:setauth,login:loginstate,setlogin:setloginstate}}>
    <App />
  </AuthContext.Provider>
</React.StrictMode>)
}
root.render(
  <Root/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
