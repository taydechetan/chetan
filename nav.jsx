import React from "react";
import amazon from "./amaozn.png";
import "./nav.css";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Cart from "./cart";

export default function Nav() {
  return (
    <div className="navbaritem container-flude">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <h3 style={{ color: "mediumslateblue" }}>Ministore</h3>
            {/* <img src={amazon} alt="Amazon Logo" style={{width: 50}} />  */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/update" className="nav-link">
                  Update
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/card" className="nav-link">
                  Card
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Cart" className="nav-link">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Products" className="nav-link">
                  Products
                </Link>
              </li>

              <div className="icons">
                <li className="nav-item">
                  <Link>
                    <CiUser />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/Cart" className="nav-link">
                    <FaShoppingCart />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link>
                     <CiSearch />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
