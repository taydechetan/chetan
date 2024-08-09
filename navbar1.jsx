import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar1.css";

export default function Navbar1({ size, setshow }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#7776B3", color: "white" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://cdn.pixabay.com/animation/2022/07/31/06/27/06-27-17-124_512.gif"
              onClick={() => setshow(true)}
              style={{ width: "100px", height: "50px", borderRadius: "40%" }}
              alt="Brand Logo"
              className="images11"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/amazon" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/card" style={{ color: "white" }}>
                  Card
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" style={{ color: "white", textDecoration: "none" }}>
                  Cart
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link" to="/amazon" style={{ color: "white" }}>
                  Amazon
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link" to="/signup" style={{ color: "white" }}>
                  Sign-up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="d-flex mx-5 mt-2">
                  <FaCartArrowDown className="iconnns" onClick={() => setshow(false)} />
                  <span className="text-light">{size}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
