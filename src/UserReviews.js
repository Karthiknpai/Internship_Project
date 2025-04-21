import React, { useState } from "react";
import "./UserReviews.css";
import { useNavigate, useLocation } from "react-router-dom";

const labels = ["Bad", "Poor", "Fair", "Good", "Excellent"];

const UserReviews = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="page-wrapper">
        <div className="content-container">
          <p>No booking data available.</p>
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      carName: booking.vehicleName,
      rentedDate: `${booking.fromDate} – ${booking.toDate}`,
      rating,
      comment,
    };
    console.log("Review Submitted: ", reviewData);
    alert("Thank you for your review!");
    setRating(0);
    setHoverRating(0);
    setComment("");
  };

  return (
    <div className="page-wrapper">
      <div className="content-container">
        <button
          className="back-button"
          onClick={() => navigate("/user-bookings")}
        >
          ← Back
        </button>
<h1>Share Your Feedback</h1>
        <div className="review-container">
          <div className="car-info">
            <img
              src={booking.image}
              alt={booking.vehicleName}
              className="car-image"
            />
            <div className="car-details">
              <h2>{booking.vehicleName}</h2>
              <p>
                Rented: {booking.fromDate} – {booking.toDate}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="rating-section">
              <label>Rating Stars:</label>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star, idx) => (
                  <div
                    key={star}
                    className="star"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    <span
                      className={
                        (hoverRating || rating) >= star ? "filled" : ""
                      }
                    >
                      ★
                    </span>
                    <small>{labels[idx]}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="comment-box">
              <label htmlFor="comment">Comments:</label>
              <textarea
                id="comment"
                rows="4"
                placeholder="Share your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
