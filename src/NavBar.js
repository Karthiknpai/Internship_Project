import React, { useState } from "react";
import "./NavBar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const goToSignup = (event) => {
  //   event.preventDefault();
  //   navigate("/role/select"); // Navigate to SignUp component
  // };

  // const goToLogin = (event) => {
  //   event.preventDefault();
  //   navigate("/"); // Navigate to SignUp component
  // };

  return (
    <>
      <header>
        <div className="nav-container">
          <nav>
            <div className="logo">
         
              <h2>Vehicle Rental</h2>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">ContactUs</a>
              </li>
              <li>
                <Link to="/login" className="login">Login</Link>
              </li>
              <li>
                <Link to="/role/select" className="signUp">SignUp</Link>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>

      {/* <section>
        <div className="nav-container">
          <div className="content">
            <h2>Responsive Navbar</h2>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default NavBar;
