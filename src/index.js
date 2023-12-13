import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContext } from './contextapi/AuthContext';
import ProductCount from './contextapi/ProductCount';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Root=()=>{
return(<React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
</React.StrictMode>)
}
root.render(
  <Root/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
