import React from "react";
import "./VehicleOwners.css"; // Optional for styling

function Payments() {
  return (
    <div className="reg-users-container">
      <h1>PAYMENTS LIST</h1>
      <table className="reg-users-table">
        <thead>
          <tr>
            <th>PaymentID</th>
            <th>UserID</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Paid Date</th>
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

export default Payments;
