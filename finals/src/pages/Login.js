import React, { useState, useRef } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

import { login } from "../services/authServices";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="login-parent-container">
        <div className="login-child-container">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1 className="form-title">Login to Santayo</h1>
            <div className="email-container">
              <input type="email" placeholder="Email" ref={email}></input>
            </div>
            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                ref={password}
              ></input>
            </div>
            <button className="loginBtn" type="submit">
              Login
            </button>
            {error && <p>{error}</p>}

            <p style={{fontFamily:"Lato, serif", color:"white"}}>
              Don't have an account?{" "}
              <NavLink to="/register" style={{color:"white"}}>Register Here!</NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
