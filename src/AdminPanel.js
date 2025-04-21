// AdminPanel.js
import React from "react";
import { Link } from "react-router-dom";
import "./AdminPanel.css";

export default function AdminPanel() {
  const stats = [
    { count: 0, label: "REG USERS", path: "/admin/reg-users", color: "#2c3e50" },
    { count: 0, label: "LISTED VEHICLES", path: "/admin/vehicles", color: "#27ae60" },
    { count: 0, label: "TOTAL BOOKINGS", path: "/admin/bookings", color: "#3498db" },
    { count: 0, label: "PAYMENTS", path: "/admin/payments", color: "#f39c12" },
    { count: 0, label: "OWNERS", path: "/admin/vehicle-owners", color: "#2c3e50" },
    { count: 0, label: "REVIEWS", path: "/admin/reviews", color: "#2ecc71" },
    { count: 0, label: "COMPLAINTS", path: "/admin/complaints", color: "#3498db" },
  ];

  return (
    <>
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="stat-cards-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-card-top" style={{ backgroundColor: stat.color }}>
              <h2>{stat.count}</h2>
              <p>{stat.label}</p>
            </div>
            {stat.path !== "#" ? (
              <Link to={stat.path} style={{ textDecoration: "none" }}>
                <div className="stat-card-footer">FULL DETAIL ➜</div>
              </Link>
            ) : (
              <div className="stat-card-footer disabled">FULL DETAIL ➜</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
