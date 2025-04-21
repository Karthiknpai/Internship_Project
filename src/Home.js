// import React from "react";
// import "./Home.css";

// export default function Home() {
//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero">
//         <div >
//           <h1>Rent Your Perfect Ride</h1>
//           <p>Find the best cars & bikes for rent at affordable prices.</p>
//           <button className="btn-primary">Explore Vehicles</button>
//         </div>
//       </div>

//       {/* Vehicle Listings */}
//       <section className="vehicle-list">
//         <h2>Available Vehicles</h2>
//         <div className="vehicle-grid">
//           <div className="vehicle-card">
//             <img src="car.jpg" alt="Car" />
//             <h3>Toyota Fortuner</h3>
//             <p>₹2000/day</p>
//             <button className="btn-secondary">Book Now</button>
//           </div>

//           <div className="vehicle-card">
//             <img src="bike.jpg" alt="Bike" />
//             <h3>Royal Enfield</h3>
//             <p>₹1000/day</p>
//             <button className="btn-secondary">Book Now</button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2025 Vehicle Rental System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import searchIcon from "./assets/search-icon.png";
import bookpayIcon from "./assets/bookpay.png";
import pickupIcon from "./assets/pickup-icon.png";
import registerIcon from "./assets/registerlist-icon.png";
import bookingIcon from "./assets/booking-icon.jpg";
import earningIcon from "./assets/earnings-icon.webp";
export default function Home() {
  const [vehicles, setVehicles] = useState([]);

  // Load vehicles from localStorage
  useEffect(() => {
    const storedVehicles = JSON.parse(sessionStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);
  }, []);

  const navigate = useNavigate();
  const handleViewDetails = (vehicle) => {
    navigate(`/vehicle/${vehicle.number}`, { state: { vehicle } });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Rent Your Perfect Ride</h1>
        <p>Find the best cars & bikes for rent at affordable prices.</p>
        {/* <button className="btn-primary">Explore Vehicles</button> */}
      </div>

      {/* Available Vehicles Section */}
      <div className="home-available-vehicles">
        {/* <h2>Vehicles Available for Rentals</h2> */}
        <div className="vehicle-grid">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <div key={index} className="vehicle-card">
                <div className="image-container">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-image"
                  />
                </div>
                <h4>{vehicle.name}</h4>
                <p>
                  {vehicle.brand} | {vehicle.type} | {vehicle.fuelType}
                </p>
                <p>
                  {vehicle.modelYear} | {vehicle.seating} Seats
                </p>
                <p className="rent-price">
                  <strong>{vehicle.rent}.00 INR / Day</strong>
                </p>
                <div className="btn-group">
                  <button
                    className="rent-btn"
                    onClick={() => navigate("/rent", { state: { vehicle } })}
                  >
                    Rent Car
                  </button>
                  <button
                    className="details-btn"
                    onClick={() => handleViewDetails(vehicle)}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No vehicles available yet.</p>
          )}
        </div>
      </div>

      {/* How It Works Section (Placed Below Vehicles) */}
      <div className="how-it-works">
        <h2 className="how-title">How It Works</h2>
        <div className="how-container">
          {/* Renters Section */}
          <div className="how-column">
            <h3 className="column-title">For Renters</h3>

            <div className="how-box">
              <div className="icon-box">
                <img
                  src={searchIcon}
                  alt="Search & Select"
                  className="how-icon"
                />
              </div>
              <div className="how-text">
                <h4>Search & Select</h4>
                <p>Book easily and securely. Fill up fast.</p>
              </div>
            </div>

            <div className="how-box">
              <div className="icon-box">
                <img src={bookpayIcon} alt="Book & Pay" className="how-icon" />
              </div>
              <div className="how-text">
                <h4>Book & Pay</h4>
                <p>Secure your ride with instant booking.</p>
              </div>
            </div>

            <div className="how-box">
              <div className="icon-box">
                <img
                  src={pickupIcon}
                  alt="Pick Up & Ride"
                  className="how-icon"
                />
              </div>
              <div className="how-text">
                <h4>Pick Up & Ride</h4>
                <p>Pick up your vehicle and start the journey.</p>
              </div>
            </div>
          </div>

          {/* Owners Section */}
          <div className="how-column">
            <h3 className="column-title">For Owners</h3>

            <div className="how-box">
              <div className="icon-box">
                <img
                  src={registerIcon}
                  alt="Register & List"
                  className="how-icon"
                />
              </div>
              <div className="how-text">
                <h4>Register & List</h4>
                <p>List your vehicle with ease.</p>
              </div>
            </div>

            <div className="how-box">
              <div className="icon-box">
                <img
                  src={bookingIcon}
                  alt="Accept Bookings"
                  className="how-icon"
                />
              </div>
              <div className="how-text">
                <h4>Accept Bookings</h4>
                <p>Receive booking requests seamlessly.</p>
              </div>
            </div>

            <div className="how-box">
              <div className="icon-box">
                <img src={earningIcon} alt="Earn Money" className="how-icon" />
              </div>
              <div className="how-text">
                <h4>Earn Money</h4>
                <p>Get paid for your rentals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Vehicle Rental System. All rights reserved.</p>
      </footer>
    </div>
  );
}
