import React, { useContext, useState } from "react";
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
      <NavLink>Santayo, {user.displayName}</NavLink>

      {user && (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/carinderia">Carinderias</NavLink>
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
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
}
