// PayNow.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PayNow.css";

const PayNow = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { vehicle, fromDate, toDate, total, totalDays } = state || {};

  const baseFare = 1960.38;
  const securityDeposit = 1500;
  const extracharge = baseFare + parseFloat(vehicle?.rent || 0);
  const finalTotal = total + baseFare + securityDeposit;

  if (!vehicle) return <h2>No Vehicle Data</h2>;

  const handlePayment = () => {
    alert("Payment Successful! Thank you for booking.");

    // Save booking data in sessionStorage
    const existingBookings = JSON.parse(sessionStorage.getItem("userBookings")) || [];

    const newBooking = {
      id: Date.now(),
      vehicleName: vehicle.name,
      image: vehicle.image,
      fromDate,
      toDate,
      status: "Confirmed",
    };

    existingBookings.push(newBooking);
    sessionStorage.setItem("userBookings", JSON.stringify(existingBookings));

    navigate("/");
  };

  return (
    <div className="paynow-wrapper">
      <div className="paynow-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>Booking & Payments</h1>

        <div className="card-container">
          {/* Left Panel */}
          <div className="left-box">
            <div className="vehicle-details">
              <img src={vehicle.image} alt={vehicle.name} className="car-image" />
              <div className="vehicle-info">
                <h2>{vehicle.name}</h2>
                <div className="info-grid">
                  <div>
                    <strong>Start Date</strong>
                    <p>{fromDate}</p>
                  </div>
                  <div>
                    <strong>End Date</strong>
                    <p>{toDate}</p>
                  </div>
                  <div>
                    <strong>City</strong>
                    <p>{vehicle.uplocation}</p>
                  </div>
                  <div>
                    <strong>Extra Charges / day</strong>
                    <p>₹ {extracharge}</p>
                  </div>
                </div>
                <p className="note">
                  <strong>Note:</strong> Rental Charges Doesn't Include Fuel
                </p>
              </div>
            </div>

            <div className="payment-method-section">
              <h3>Select Payment Method</h3>
              <div className="payment-options">
                {[
                  {
                    value: "gpay",
                    img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
                    alt: "GPay",
                  },
                  {
                    value: "paytm",
                    img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png",
                    alt: "Paytm",
                  },
                  {
                    value: "paypal",
                    img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
                    alt: "PayPal",
                  },
                  {
                    value: "card",
                    img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg",
                    alt: "Card",
                  },
                ].map(({ value, img, alt }) => (
                  <label className="payment-option" key={value}>
                    <input type="radio" name="paymentMethod" value={value} />
                    <img src={img} alt={alt} />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="right-panel">
            <h3>Price Details</h3>
            <div className="price-row">
              <span>Base Fare</span>
              <span>₹ {baseFare.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Security Deposit</span>
              <span>₹ {securityDeposit.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Rent Charge ({totalDays} days)</span>
              <span>₹ {total}</span>
            </div>
            <hr />
            <div className="price-row total">
              <strong>Total Amount</strong>
              <strong>₹ {finalTotal.toFixed(2)}</strong>
            </div>
            <p className="tax-text">*incl. of taxes</p>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Accept terms and conditions</label>
            </div>
            <button className="pay-now" onClick={handlePayment}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
