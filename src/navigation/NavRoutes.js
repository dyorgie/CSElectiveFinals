import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/About";
import Carinderias from "../pages/Carinderias";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CardDetails from "../pages/CardDetails";
import Cart from "../pages/Cart";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function NavRoutes() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
      <Route path="/about" element={user ? <About /> : <Login />} />
      <Route path="/carinderias" element={user ? <Carinderias /> : <Login />} /> {/* Same path for Carinderias */}
      <Route path="/carinderias/:id" element={user ? <CardDetails /> : <Login />} /> 
      <Route path="/contact" element={user ? <Contact /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={user ? <Cart /> : <Login />} />
    </Routes>
  );
}
