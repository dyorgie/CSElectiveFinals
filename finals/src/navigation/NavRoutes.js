import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

export default function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}
