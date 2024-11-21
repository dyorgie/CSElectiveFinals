import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function NavRoutes() {
  const { user } = useContext(UserContext);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}
