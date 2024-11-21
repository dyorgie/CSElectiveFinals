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
      <div className="nav-container">
        <NavLink to="/">Santayo, {user.displayName}</NavLink>

        {user && (
          <>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink
              to="/carinderia"
              className="nav-link"
              activeClassName="active"
            >
              Carinderias
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
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
      </div>
    </nav>
  );
}
