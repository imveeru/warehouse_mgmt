import React from 'react';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { AuthProvider } from "./context/AuthContext"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        {/* <Register/> */}
      </AuthProvider>
    </div>
  );
}

export default App;
