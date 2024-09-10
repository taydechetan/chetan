import React from "react";
import "./navbar1.css";
import { FaCartArrowDown, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import atozay from "./atozbay.png";
import { IoSearch } from "react-icons/io5";

export default function Navbar1({ size, setshow }) {
  const handelserch =() => {
    console.log("hello")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img
              src={atozay}
              onClick={() => setshow(true)}
              style={{ width: "100px", height: "50px" }}
              alt="Brand Logo"
              className="images11"
            />
          </Link>

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
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">Hi</li>
              <hr className="custom-hr mt-0 mb-0"/>

              <li className="nav-item">
                <Link className="nav-link  text-primary" to="/signup">
                  Sign-in
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                or
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item" >
                <Link className="nav-link  text-primary" to="account">
                  resister
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />


              <li className="nav-item">
                <Link className="nav-link" to="home">
                  Home
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />


              <li className="nav-item">
                <Link className="nav-link" to="/card">
                  Card
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                <Link className="nav-link" to="/amazon">
                  Amazon
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                <Link className="nav-link" to="/helpcont">
                  Help-Contact
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                <Link className="nav-link" to="/dailyd">
                  Daily-Deals
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                <Link className="nav-link" to="/selling">
                  Selling
                </Link>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Myatozbay
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Summary
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Recently viewed
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Watchlist
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Purchases
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Selling
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Bidding History
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dropdown-item fw-bold">
                      Messages
                    </a>
                  </li>
                </ul>
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                <FaBell style={{ height: "30px", width: "37px" }} />
              </li>
              <hr className="custom-hr mt-0 mb-0" />

              <li className="nav-item">
                <Link to="/cart" className="d-flex mx-5 mt-2">
                  <FaCartArrowDown
                    className="iconnns"
                    onClick={() => setshow(false)}
                  />
                  <span className="zero text-red">{size}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </nav>
      <hr />

      {/* second navbar */}

      <div
        className="mainnt"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-arround",
        }}
      >
        <img
          src={atozay}
          alt="img"
          className="hideimg"
          style={{ width: "100px", height: "70px", objectFit: "contain" }}
        />
        <div className="dropdown">
          <a
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ textDecoration: "none", color: "black" }}
          >
            Shop by Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item fw-bold" href="#">
                Baby Essentials
              </a>
            </li>

            <li>
              <a className="dropdown-item fw-bold" href="#">
                Books, Movies & Music
              </a>
            </li>

            <li>
              <a className="dropdown-item fw-bold" href="#">
                Fashion
              </a>
            </li>
          </ul>
        </div>

        <div className="inputdr d-flex">
          <input
            type="text"
            className="form-controls"
            placeholder="Search For anything"
            style={{
              marginTop: "15px",
              fontFamily: "serif",
            }}
          />

          <div
            className="natived  input-group search-drop mt-3"
          >
            <select className="form-control" style={{height:"50px" ,width:'200px', border:"0.1px solid black"}}>
              <option value="hidden">All categories</option>
              <option value="22">baby Essentials</option>
              <option value="26">Books, Movies & Music</option>
            </select>
          </div>

          <div>
          <p className="searchbar" onClick={handelserch}>
            <IoSearch />
          </p>
          </div>

        </div>
      </div>
      <hr />
    </>
  );
}
