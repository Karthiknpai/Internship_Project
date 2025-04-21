// import React from "react";
// import Login from "./Login.js";
// import SignUp from "./SignUp.js";
// import NavBar from "./NavBar.js";
// import Home from "./Home.js";
// import VehicleList from "./VehicleList.js";
// import VehicleDetail from "./VehicleDetail.js"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import RoleSelection from "./RoleSelection.js";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/role/select" element={<RoleSelection />} />
//           <Route path="/vehiclelist" element={<VehicleList />} />
//           <Route path="/vehicle/:id" element={<VehicleDetail />} />
//           <Route path="/signup/:role" element={<SignUp />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import VehicleList from "./VehicleList.js";
import VehicleDetail from "./VehicleDetail.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoleSelection from "./RoleSelection.js";
import RentPage from "./RentPage.js";
import PayNow from "./PayNow.js";
import AdminLayout from "./AdminLayout.js";
import AdminPanel from "./AdminPanel.js";
import RegUsers from "./RegUsers.js";
import VehicleOwners from "./VehicleOwners.js";
import Vehicles from "./Vehicles.js";
import Bookings from "./Bookings.js";
import Payments from "./Payments.js";
import Reviews from "./Reviews.js";
import Complaints from "./Complaints.js";
import UserBookings from "./UserBookings.js";
import UserReviews from "./UserReviews.js";

function App() {
  const [vehicles, setVehicles] = useState([]); // Global vehicle state

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home vehicles={vehicles} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/role/select" element={<RoleSelection />} />

          <Route
            path="/vehicleList"
            element={
              <VehicleList vehicles={vehicles} setVehicles={setVehicles} />
            }
          />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/pay" element={<PayNow />} />
          <Route path="/user-bookings" element={<UserBookings />} />
          <Route path="/user-reviews" element={<UserReviews />} />
          <Route path="/signup/:role" element={<SignUp />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPanel />} />
            <Route path="/admin/reg-users" element={<RegUsers />} />
            <Route path="/admin/vehicle-owners" element={<VehicleOwners />} />
            <Route path="/admin/vehicles" element={<Vehicles />} />
            <Route path="/admin/bookings" element={<Bookings />} />
            <Route path="/admin/payments" element={<Payments />} />
            <Route path="/admin/reviews" element={<Reviews />} />
            <Route path="/admin/complaints" element={<Complaints />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
