import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="parent-container">
        <form className="form-container">
          <h1 className="form-title">Login to Santayo</h1>
          <div className="email-container">
            <label>Enter your email:</label>
            <input type="email"></input>
          </div>
          <div className="password-container">
            <label>Enter your password:</label>
            <input type="password"></input>
          </div>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}
