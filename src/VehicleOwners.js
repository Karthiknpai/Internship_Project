import React from "react";
import "./VehicleOwners.css"; // Optional for styling

function VehicleOwners() {
  return (
    <div className="reg-users-container">
      <h1>OWNERS LIST</h1>
      <table className="reg-users-table">
        <thead>
          <tr>
            <th>OwnerID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Reg Date</th>
            <th>Vehcile Listed </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows will be rendered here dynamically */}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleOwners;
