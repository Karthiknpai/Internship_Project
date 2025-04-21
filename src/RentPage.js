import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RentPage.css";

const RentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { vehicle } = state || {};

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [days, setDays] = useState(0);

  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diff = (e - s) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const handleDateChange = (setter, value) => {
    setter(value);
    const calculatedDays =
      setter === setFromDate
        ? calculateDays(value, toDate)
        : calculateDays(fromDate, value);
    setDays(calculatedDays);
  };

  const rentCharges = days * parseFloat(vehicle?.rent || 0);
  const total = rentCharges;

  const handleBooking = () => {
    navigate("/pay", {
      state: { vehicle, fromDate, toDate, totalDays: days, total },
    });
  };

  if (!vehicle) return <h2>No Vehicle Data</h2>;

  return (
    <div className="rent-page-wrapper">
      <button
        className="back-btn"
        onClick={() =>
          navigate(`/vehicle/${vehicle.number}`, { state: { vehicle } })
        }
      >
        ← Back
      </button>
<h1>Rent date Range</h1>
      <div className="rent-content-box">
        {/* LEFT: Date Form */}
        <div className="rent-form-section">
          <h2>Rent: {vehicle.name}</h2>
          <p className="rent-price">₹{vehicle.rent}/day</p>

          <label>From Date:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => handleDateChange(setFromDate, e.target.value)}
          />

          <label>To Date:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => handleDateChange(setToDate, e.target.value)}
          />
        </div>

        {/* RIGHT: Price Summary + Proceed */}
        <div className="rent-price-summary">
          <h3>Price Details</h3>
          {/* <div className="price-item">
            <span>Base Fare</span>
            <span>₹{baseFare}</span>
          </div>
          <div className="price-item">
            <span>Security Deposit</span>
            <span>₹{securityDeposit}</span>
          </div> */}
          <div className="price-item">
            <span>Rent × {days} day(s)</span>
            <span>₹{rentCharges}</span>
          </div>
          <hr />
          <div className="price-total">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>

          <button className="proceed-btn" onClick={handleBooking}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentPage;
