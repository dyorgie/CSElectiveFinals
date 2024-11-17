import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="login-parent-container">
        <form className="form-container">
          <h1 className="form-title">Login to Santayo</h1>
          <div className="email-container">
            <input type="email" placeholder="Email"></input>
          </div>
          <div className="password-container">
            <input type="password" placeholder="Password"></input>
          </div>
          <button>Login</button>
          <p>Don't have an account yet? Register here!</p>
        </form>
      </div>
    </>
  );
}
