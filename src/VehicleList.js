// import React, { useState } from "react";
// import "./VehicleList.css";
// import { useNavigate } from "react-router-dom";

// const VehicleList = () => {
//   const [image, setImage] = useState(null);
//   const [vehicles, setVehicles] = useState([]);
//   const [vehicleData, setVehicleData] = useState({
//     name: "",
//     brand: "",
//     type: "",
//     fuelType: "",
//     modelYear: "",
//     number: "",
//     seating: "",
//     rent: "",
//     email: "",
//     contact: "",
//     uplocation: "",
//     offlocation: "",
//     fromDate: "",
//     toDate: "",
//   });

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleChange = (e) => {
//     setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
//   };

//   const handleAddVehicle = () => {
//     if (Object.values(vehicleData).some((val) => val === "")) {
//       alert("Please fill all fields");
//       return;
//     }
//     const newVehicle = { ...vehicleData, image };
//     setVehicles([...vehicles, newVehicle]);
//     setVehicleData({
//       name: "",
//       brand: "",
//       type: "",
//       fuelType: "",
//       modelYear: "",
//       number: "",
//       seating: "",
//       rent: "",
//       email: "",
//       contact: "",
//       uplocation: "",
//       offlocation: "",
//       fromDate: "",
//       toDate: "",
//     });
//     setImage(null);
//   };

//   const navigate = useNavigate();

//   const handleViewDetails = (vehicle) => {
//     navigate(`/vehicle/${vehicle.number}`, { state: { vehicle } });
//   };

//   return (
//     <>
//       <div className="vehicle-container">
//         <div className="vehicle-management">
//           <h3>Vehicle Image</h3>
//           <img
//             src={image || "https://via.placeholder.com/150"}
//             alt="Vehicle"
//             className="vehicle-pic"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="upload-input"
//             required
//           />
//           <div className="vehicle-details">
//             <button className="add-vehicle-btn" onClick={handleAddVehicle}>
//               Add Vehicle
//             </button>
//           </div>
//         </div>
//         <div className="vehicle-info">
//           <h3>Vehicle Information</h3>
//           <div className="input-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Vehicle Name"
//               value={vehicleData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="brand"
//               placeholder="Brand"
//               value={vehicleData.brand}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <select
//               name="type"
//               value={vehicleData.type}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Type</option>
//               <option>Car</option>
//               <option>Bike</option>
//               <option>Scooter</option>
//             </select>
//             <select
//               name="fuelType"
//               value={vehicleData.fuelType}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Fuel Type</option>
//               <option>Petrol</option>
//               <option>Diesel</option>
//               <option>Hybrid</option>
//             </select>
//           </div>
//           <div className="input-group">
//             <input
//               type="number"
//               name="modelYear"
//               placeholder="Model Year"
//               value={vehicleData.modelYear}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="number"
//               placeholder="Vehicle number"
//               value={vehicleData.number}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="number"
//               name="seating"
//               placeholder="Seating Capacity"
//               value={vehicleData.seating}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="rent"
//               placeholder="Rent Per Day"
//               value={vehicleData.rent}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <h3>Contact Info</h3>
//           <div className="input-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Owner Email"
//               value={vehicleData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="number"
//               name="contact"
//               placeholder="Contact Number"
//               value={vehicleData.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="text"
//               name="uplocation"
//               placeholder="Pick-up Location"
//               value={vehicleData.uplocation}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="offlocation"
//               placeholder="Pick-off Location"
//               value={vehicleData.offlocation}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <h3>Availability Date</h3>
//           <div className="input-group">
//             <input
//               type="date"
//               name="fromDate"
//               value={vehicleData.fromDate}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="date"
//               name="toDate"
//               value={vehicleData.toDate}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <h3>Vehicle Description</h3>
//           <textarea placeholder="Write about the vehicle..."></textarea>
//         </div>
//       </div>

//       <div className="available-vehicles">
//         <h1>Available Vehicles</h1>
//         <div className="vehicle-grid">
//           {vehicles.map((vehicle, index) => (
//             <div key={index} className="vehicle-card">
//               <div className="image-container">
//                 <img
//                   src={vehicle.image}
//                   alt={vehicle.name}
//                   className="vehicle-image"
//                 />
//               </div>
//               <h4>{vehicle.name}</h4>
//               <p>
//                 {vehicle.brand} | {vehicle.type} | {vehicle.fuelType}
//               </p>
//               <p>
//                 {vehicle.modelYear} | {vehicle.seating} Seats
//               </p>
//               <p className="rent-price">
//                 <strong>{vehicle.rent}.00 INR / Day</strong>
//               </p>
//               <div className="btn-group">
//                 <button className="rent-btn">Rent Car</button>
//                 <button
//                   className="details-btn"
//                   onClick={() => handleViewDetails(vehicle)}
//                 >
//                   Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default VehicleList;

import React, { useState, useEffect } from "react";
import "./VehicleList.css";
import { useNavigate } from "react-router-dom";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [availabilityList, setAvailabilityList] = useState([
    { fromDate: "", toDate: "" },
  ]);

  const [vehicleData, setVehicleData] = useState({
    name: "",
    brand: "",
    type: "",
    fuelType: "",
    modelYear: "",
    number: "",
    seating: "",
    rent: "",
    email: "",
    contact: "",
    uplocation: "",
    offlocation: "",
    image: "",
  });

  useEffect(() => {
    const storedVehicles = JSON.parse(sessionStorage.getItem("vehicles")) || [];
    setVehicles(storedVehicles);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVehicleData({ ...vehicleData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleAvailabilityChange = (index, e) => {
    const newAvailability = [...availabilityList];
    newAvailability[index][e.target.name] = e.target.value;
    setAvailabilityList(newAvailability);
  };

  const handleAddAvailability = () => {
    setAvailabilityList([...availabilityList, { fromDate: "", toDate: "" }]);
  };

  const handleAddVehicle = () => {
    if (
      Object.values(vehicleData).some((val) => val === "") ||
      availabilityList.some(
        (entry) => entry.fromDate === "" || entry.toDate === ""
      )
    ) {
      alert("Please fill all fields including availability ranges");
      return;
    }

    const newVehicle = {
      ...vehicleData,
      availability: availabilityList,
    };

    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    sessionStorage.setItem("vehicles", JSON.stringify(updatedVehicles));

    setVehicleData({
      name: "",
      brand: "",
      type: "",
      fuelType: "",
      modelYear: "",
      number: "",
      seating: "",
      rent: "",
      email: "",
      contact: "",
      uplocation: "",
      offlocation: "",
      image: "",
    });

    setAvailabilityList([{ fromDate: "", toDate: "" }]);
  };

  const navigate = useNavigate();

  const handleViewDetails = (vehicle) => {
    navigate(`/vehicle/${vehicle.number}`, { state: { vehicle } });
  };

  return (
    <>
      <div className="vehicle-container">
        <div className="vehicle-management">
          <h3>Vehicle Image</h3>
          <img
            src={vehicleData.image || "https://via.placeholder.com/150"}
            alt="Vehicle"
            className="vehicle-pic"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="upload-input"
          />
          <button className="add-vehicle-btn" onClick={handleAddVehicle}>
            Add Vehicle
          </button>
        </div>

        <div className="vehicle-info">
          <h3>Vehicle Information</h3>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Vehicle Name"
              value={vehicleData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={vehicleData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <select
              name="type"
              value={vehicleData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option>Car</option>
              <option>Bike</option>
              <option>Scooter</option>
            </select>
            <select
              name="fuelType"
              value={vehicleData.fuelType}
              onChange={handleChange}
              required
            >
              <option value="">Select Fuel Type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div className="input-group">
            <input
              type="number"
              name="modelYear"
              placeholder="Model Year"
              value={vehicleData.modelYear}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Vehicle Number"
              value={vehicleData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="number"
              name="seating"
              placeholder="Seating Capacity"
              value={vehicleData.seating}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="rent"
              placeholder="Rent Per Day"
              value={vehicleData.rent}
              onChange={handleChange}
              required
            />
          </div>

          <h3>Contact Info</h3>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Owner Email"
              value={vehicleData.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="contact"
              placeholder="Contact Number"
              value={vehicleData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="uplocation"
              placeholder="Pick-up Location"
              value={vehicleData.uplocation}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="offlocation"
              placeholder="Drop-off Location"
              value={vehicleData.offlocation}
              onChange={handleChange}
              required
            />
          </div>

          <h3>Availability Dates</h3>
          {availabilityList.map((range, index) => (
            <div className="input-group" key={index}>
              <input
                type="date"
                name="fromDate"
                value={range.fromDate}
                onChange={(e) => handleAvailabilityChange(index, e)}
                required
              />
              <input
                type="date"
                name="toDate"
                value={range.toDate}
                onChange={(e) => handleAvailabilityChange(index, e)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAvailability}
            style={{ marginTop: "10px" }}
          >
            + Add More Availability
          </button>
        </div>
      </div>

      <div className="available-vehicles">
        <h1>Available Vehicles</h1>
        <div className="vehicle-grid">
          {vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <div key={index} className="vehicle-card">
                <div className="image-container">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-image"
                  />
                </div>
                <h4>{vehicle.name}</h4>
                <p>
                  {vehicle.brand} | {vehicle.type} | {vehicle.fuelType}
                </p>
                <p>
                  {vehicle.modelYear} | {vehicle.seating} Seats
                </p>
                <p className="rent-price">
                  <strong>{vehicle.rent}.00 INR / Day</strong>
                </p>
                <div className="btn-group">
                  <button className="rent-btn">Rent Car</button>
                  <button
                    className="details-btn"
                    onClick={() => handleViewDetails(vehicle)}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No vehicles available yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default VehicleList;
