import React from "react";
import "./RegUsers.css"; // Optional for styling

function RegUsers() {
  return (
    <div className="reg-users-container">
      <h1>REGISTERED USERS</h1>
      <table className="reg-users-table">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Reg Date</th>
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

export default RegUsers;
