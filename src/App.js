import React from 'react';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from './routes/PrivateRoute'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <PrivateRoute path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
