import React, { useEffect, useState } from "react";
import "./UserBookings.css";
import { useNavigate } from "react-router-dom";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookings =
      JSON.parse(sessionStorage.getItem("userBookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleReviewClick = (booking) => {
    navigate("/user-reviews", { state: { booking } });
  };

  return (
    <div className="user-bookings-wrapper">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <img src={booking.image} alt={booking.vehicleName} />
              <div className="booking-info">
                <h3>{booking.vehicleName}</h3>
                <p>
                  {booking.fromDate} – {booking.toDate}
                </p>
              </div>
              <div className="booking-actions">
                {booking.status.toLowerCase() === "confirmed" && (
                  <button
                    className="review-button"
                    onClick={() => handleReviewClick(booking)}
                  >
                    Leave a Review
                  </button>
                )}
                <div
                  className={`booking-status ${booking.status.toLowerCase()}`}
                >
                  {booking.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBookings;
