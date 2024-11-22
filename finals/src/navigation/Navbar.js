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
        <div className="nav-child-cont">
          <div>
            <NavLink to="/" className="logo">SANTAYO</NavLink>
          </div>
       
        <div style={{marginTop:"8px"}}>
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
                <NavLink to="/login" className="nav-link">Login</NavLink>
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </>
            )}

            {user && (
              <>
                <div className="dropdown">
                  <span className="username">{user ? `Santayo, ${user.displayName}?` : ""} <i class="bi bi-chevron-down" style={{fontSize:"15px"}}></i></span>
                  <div class="dropdown-content">
                    <button className="logoutBtn" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
               
              </>
            )}
        </div>
         
        </div>
      
      </div>
    </nav>
  );
}
