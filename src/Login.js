import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaLock } from "react-icons/fa";
function Login() {
  const navigate = useNavigate();

  const goToSignup = (event) => {
    event.preventDefault();
    navigate("/role/select"); // Navigate to SignUp component
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-box">
        <SiGmail />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-box">
        <FaLock />
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="login-btn">Login</button>
        <p>
          Don't have an account?{" "}
          <a href="/signup" onClick={goToSignup}>
            Signup now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
