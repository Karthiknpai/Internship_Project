import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import customerImg from "./assets/customers_img.png";
import ownerImg from "./assets/owners.avif";
function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="role-container">
      <h2>Select the Role</h2>
      <div className="role-box-container">
      <div className="role-box">
        <button onClick={() => navigate("/signup/customer")}>
          <img src={customerImg} alt="Customer" />
          <p>Customer</p>
        </button>
      </div>
      <div className="role-box">
        <button onClick={() => navigate("/signup/owner")}>
          <img src={ownerImg} alt="Customer" />
          <p>Owner</p>
        </button>
      </div>
      </div>
      
     
    </div>
  );
}

export default RoleSelection;
