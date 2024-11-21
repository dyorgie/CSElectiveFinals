import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../navigation/Navbar.css";
import { logout } from "../services/authServices";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav>
      <h1>Santayo</h1>

      {user && (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </>
      )}

      {!user && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}

      {user && (
        <>
          Hello, {user.displayName}
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
