import "./Register.css";
import { useRef, useState } from "react";

import { create_user } from "../services/authServices";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await create_user(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="register-parent-container">
        <form className="register-form-container" onSubmit={handleSubmit}>
          <div className="closeBtn-cont"></div>
          <h1 className="registerForm-title">Register to Santayo</h1>
          <div className="register-email-container">
            <input type="email" placeholder="Email" ref={emailRef}></input>
          </div>

          <div className="register-password-container">
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
            ></input>
          </div>

          <div className="username-container">
            <input type="text" placeholder="Username" ref={usernameRef}></input>
          </div>

          <button>Sign up</button>

          {error && <p>{error}</p>}

          <p style={{color:"white", fontFamily:"Lato, serif"}}>
            Already have an account? <NavLink to="/login" style={{color:"white"}}>Login Here!</NavLink>
          </p>
        </form>
      </div>
    </>
  );
}