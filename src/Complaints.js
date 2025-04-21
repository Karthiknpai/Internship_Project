import React from "react";
import "./VehicleOwners.css"; // Optional for styling

function Complaints() {
  return (
    <div className="reg-users-container">
      <h1>COMPLAINTS LIST</h1>
      <table className="reg-users-table">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>UserID</th>
            <th>Issue</th>
            <th>Ralated to</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{/* Data rows will be rendered here dynamically */}</tbody>
      </table>
    </div>
  );
}

export default Complaints;
