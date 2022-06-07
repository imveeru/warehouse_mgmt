import React from 'react';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { AuthProvider } from "./context/AuthContext"
import { Routes, Route } from "react-router-dom";
import {CartProvider} from "./context/cartContext"
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Checkout from './pages/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/forgot-password" element={<ForgotPassword />}/>
            <Route exact path="/checkout/:id" element={<Checkout />}/>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
