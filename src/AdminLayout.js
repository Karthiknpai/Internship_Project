// AdminLayout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./AdminPanel.css";

export default function AdminLayout() {
//   const location = useLocation();

  return (
    <div className="admin-dashboard-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-title">Admin</div>
        <ul className="admin-sidebar-menu">
          <li>
            <Link
              to="/admin"
              style={{ color: "white", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reg-users"
              style={{ color: "white", textDecoration: "none" }}
            >
              Reg Users
            </Link>
          </li>
          <li>
            <Link
              to="/admin/vehicle-owners"
              style={{ color: "white", textDecoration: "none" }}
            >
              Owners
            </Link>
          </li>
          <li>
            <Link
              to="/admin/vehicles"
              style={{ color: "white", textDecoration: "none" }}
            >
              Vehicles
            </Link>
          </li>
          <li>
            <Link
              to="/admin/bookings"
              style={{ color: "white", textDecoration: "none" }}
            >
              Bookings
            </Link>
          </li>
          <li>
            <Link
              to="/admin/payments"
              style={{ color: "white", textDecoration: "none" }}
            >
              Payments
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reviews"
              style={{ color: "white", textDecoration: "none" }}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/admin/complaints"
              style={{ color: "white", textDecoration: "none" }}
            >
              Complaints
            </Link>
          </li>
        </ul>
        <button className="admin-logout-button">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="admin-dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}
