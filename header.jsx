import React from "react";
import "./Header.css";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
// import logos from "../../Assets/image/logo_1705643891logo (3).png";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Header-section">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-none d-lg-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li className="nav-item me-4">
                  <a href="#" className="icon" style={{ color: "white" }}>
                    <CiMail className="icon-email fs-4" />
                    <span className="ms-2" style={{ fontSize: "15px" }}>
                      info@secrets4exams.com
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="icon" style={{ color: "white" }}>
                    <FaLocationDot className="icon-location fs-4" />
                    <span className="ms-2" style={{ fontSize: "15px" }}>
                      UAE
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="whatsapp-icon d-flex justify-content-center">
              <a
                href="https://www.whatsapp.com/"
                style={{ fontSize: "20px", color: "white" }}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* second header */}
      <div className="header-second">
        <div className="bg-light py-2">
          <nav className="container-fluid d-flex justify-content-between align-items-center">
            <a href="./" className="navbar-brand">
              {/* <img src={logos} alt="Logo" className="img-fluid" /> */}
              <img
                src="https://www.secrets4exams.com/images/logo/logo_1705643891logo%20(3).png"
                alt="img"
              />
            </a>
            <div className="header-buttons d-flex align-items-center">
              <div className="d-none d-md-flex">
                <Link to="/login" className="custom-loginn">
                  <button className="custom-login">Login</button>
                </Link>

                <Link to="./signup" className="newsnm">
                  <button className="custom-login">signup</button>
                </Link>
              </div>

              <div className="d-flex">
                <IoSearch className="fs-4 text-success search-icon mx-4" />
                <div className="position-relative shopping-bag mx-4">
                  <FaShoppingBag className="fs-4 text-success" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    0
                  </span>
                </div>
                <a href="#">
                  <FiMenu className="fs-4 text-success menu-icon mx-4" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className="thisdd ms-3 mx-3 mt-2 mb-3 d-flex d-md-none"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/login" className="secretlogn" style={{ width: "45%" }}>
          <button
            className="loginbtnsew button-style"
            style={{
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/signup" className="secretsign ms-2" style={{ width: "45%" }}>
          <button
            className="signupbtnsew button-style"
            style={{
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
