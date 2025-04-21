// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./VehicleDetail.css";

// const VehicleDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { vehicle } = location.state || {};

//   if (!vehicle) {
//     return <h2>No Vehicle Data Found!</h2>;
//   }

//   return (
//     <div className="vehicle-detail-container">
//       <button className="back-btn" onClick={() => navigate("/")}>
//         ← Back
//       </button>
//       <div className="vehicle-detail">
//         <div className="image-section">
//           <img
//             src={vehicle.image}
//             alt={vehicle.name}
//             className="detail-image"
//           />
//           {/* <button className="rent-vehicle-btn">Rent</button> */}
//         </div>

//         <div className="info-section">
//           <h2>{vehicle.name}</h2>
//           <div className="info-grid">
//             <div className="info-item">
//               <strong>Vehicle Brand:</strong> {vehicle.brand}
//             </div>
//             <div className="info-item">
//               <strong>Vehicle Type:</strong> {vehicle.type}
//             </div>
//             <div className="info-item">
//               <strong>Fuel Type:</strong> {vehicle.fuelType}
//             </div>
//             <div className="info-item">
//               <strong>Model Year:</strong> {vehicle.modelYear}
//             </div>
//             <div className="info-item">
//               <strong>Vehicle Number:</strong> {vehicle.number}
//             </div>
//             <div className="info-item">
//               <strong>Seating Capcity:</strong> {vehicle.seating}
//             </div>
//             <div className="info-item">
//               <strong>Pick-up Location:</strong> {vehicle.uplocation}
//             </div>
//             <div className="info-item">
//               <strong>Pick-off Location:</strong> {vehicle.offlocation}
//             </div>
//             <div className="info-item">
//               <strong>Available Date from:</strong> {vehicle.fromDate}
//             </div>
//             <div className="info-item">
//               <strong>Available Date to:</strong> {vehicle.toDate}
//             </div>
//             <div className="info-item">
//               <strong>Rent Per Day:</strong> {vehicle.rent}
//             </div>
//             <h3 className="info-item">Owner Details</h3>
//             <div className="info-item">
//               <strong>Email:</strong> {vehicle.email}
//             </div>
//             <div className="info-item">
//               <strong>Contact No:</strong> {vehicle.contact}
//             </div>
//             <div className="info-item">
//               <strong>Price:</strong> INR {vehicle.rent}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VehicleDetail;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VehicleDetail.css";

const VehicleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle } = location.state || {};

  if (!vehicle) {
    return <h2>No Vehicle Data Found!</h2>;
  }

  return (
    <div className="vehicle-detail-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
<h1>Vehcile Detail</h1>
      <div className="vehicle-detail-card">
        <div className="image-section">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="vehicle-image"
          />
        </div>

        <div className="info-section">
          <h2 className="vehicle-title">{vehicle.name}</h2>

          <div className="details-grid">
            <div className="detail-item"><strong>Brand:</strong> {vehicle.brand}</div>
            <div className="detail-item"><strong>Type:</strong> {vehicle.type}</div>
            <div className="detail-item"><strong>Fuel Type:</strong> {vehicle.fuelType}</div>
            <div className="detail-item"><strong>Model Year:</strong> {vehicle.modelYear}</div>
            <div className="detail-item"><strong>Vehicle Number:</strong> {vehicle.number}</div>
            <div className="detail-item"><strong>Seating Capacity:</strong> {vehicle.seating}</div>
            <div className="detail-item"><strong>Pick-up Location:</strong> {vehicle.uplocation}</div>
            <div className="detail-item"><strong>Drop Location:</strong> {vehicle.offlocation}</div>
            <div className="detail-item"><strong>Rent Per Day:</strong> ₹{vehicle.rent}</div>
          </div>

          <h3 className="owner-header">Available Date Ranges</h3>
          <div className="owner-details">
            {vehicle.availability && vehicle.availability.length > 0 ? (
              vehicle.availability.map((range, idx) => (
                <div key={idx}>
                  <strong>{idx + 1}.</strong> {range.fromDate} → {range.toDate}
                </div>
              ))
            ) : (
              <p>No availability provided.</p>
            )}
          </div>

          <h3 className="owner-header">Owner Details</h3>
          <div className="owner-details">
            <div><strong>Email:</strong> {vehicle.email}</div>
            <div><strong>Contact No:</strong> {vehicle.contact}</div>
          </div>

          <button
            className="rent-btn"
            onClick={() => navigate("/rent", { state: { vehicle } })}
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
