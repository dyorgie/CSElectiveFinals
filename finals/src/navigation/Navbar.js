import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user } = useContext(UserContext);
  <nav>
    <h1>Santayo</h1>
    {user && (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </>
    )}
  </nav>;
}
