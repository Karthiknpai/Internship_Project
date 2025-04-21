import React from "react";
import "./Login.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
function SignUp() {
  const navigate = useNavigate();
  const { role } = useParams();

  const goToLogin = (event) => {
    event.preventDefault();
    navigate("/login"); // Navigate to SignUp component
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{role === "owner" ? "Owner Sign Up" : "Customer Sign Up"}</h2>
        <p>
          {role === "owner"
            ? "Please enter your details to sign up as an owner."
            : "Please enter your details to sign up as a customer."}
        </p>
        <div className="input-box">
          <SiGmail />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-box">
          <FaPhoneSquareAlt />
          <input type="text" placeholder="Enter your phone number" />
        </div>
        <div className="input-box">
          <FaLock />
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="input-box">
          <FaLock />
          <input type="password" placeholder="Confirm password" />
        </div>
        <button className="login-btn">Sign Up</button>
        <p>
          Al'ready have an account?{" "}
          <a href="/login" onClick={goToLogin}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
