import React from "react";
import "./VehicleOwners.css"; // Optional for styling

function Reviews() {
  return (
    <div className="reg-users-container">
      <h1>REVIEWS LIST</h1>
      <table className="reg-users-table">
        <thead>
          <tr>
            <th>ReviewID</th>
            <th>UserID</th>
            <th>Vehcile</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows will be rendered here dynamically */}
        </tbody>
      </table>
    </div>
  );
}

export default Reviews;
