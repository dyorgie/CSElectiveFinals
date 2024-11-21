import "./Register.css";
import { useRef, useState } from "react";

import { create_user } from "../services/authServices";
import { useNavigate } from "react-router-dom";

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
      navigate("/");
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
            <input type="email" placeholder="email" ref={emailRef}></input>
          </div>

          <div className="register-password-container">
            <input
              type="password"
              placeholder="password"
              ref={passwordRef}
            ></input>
          </div>

          <div className="username-container">
            <input type="text" placeholder="username" ref={usernameRef}></input>
          </div>

          <button>Sign up</button>

          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
}
