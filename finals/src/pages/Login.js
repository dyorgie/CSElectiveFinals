import React, { useState, useRef } from "react";
import "./Login.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

import { login } from "../services/authServices";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value)
      .then(() => {
        Navigate("/about");
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
          <div className="closeBtn-cont"><NavLink to="/"><p className="closeBtn">x</p></NavLink></div>
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
          <button className="loginBtn" type="submit">Login</button>
          <NavLink to="/register"><p>Don't have an account yet? Register here!</p></NavLink>
          {error && <p>{error}</p>}
        </form>
        </div>
      </div>
    </>
  );
}
