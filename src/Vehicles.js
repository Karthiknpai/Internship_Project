import React from "react";
import "./RegUsers.css"; // Optional for styling

function Vehicles() {
  return (
    <div className="reg-users-container">
      <h1>VEHICLES LIST</h1>
      <table className="reg-users-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Vehicle Name</th>
            <th>Type</th>
            <th>Fuel Type</th>
            <th>Seating</th>
            <th>Model Year</th>
            <th>Reg No</th>
            <th>Rent / day</th>
            <th>OwnerID</th>
            <th>Availability Dates</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{/* Data rows will be rendered here dynamically */}</tbody>
      </table>
    </div>
  );
}

export default Vehicles;
