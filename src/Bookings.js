import React from "react";
import "./VehicleOwners.css"; // Optional for styling

function Bookings() {
  return (
    <div className="reg-users-container">
      <h1>BOOKING LIST</h1>
      <table className="reg-users-table">
        <thead>
          <tr>
            <th>BookingID</th>
            <th>UserID</th>
            <th>vehicle RegNo</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows will be rendered here dynamically */}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;
