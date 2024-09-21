import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TiThMenu } from "react-icons/ti";
import "./Togglebar.css"; 
import { IoSearch } from "react-icons/io5";

const Togglebar = () => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => setShow(!show);

  return (
    <>
      <p
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          right: "20px",
          top: "20px",
          color: "#37af6c",
        }}
      >
        <TiThMenu />
      </p>

      <Offcanvas show={show} onHide={toggleSidebar} placement="end">
        <div className="togglebar-header">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="togglebar-title">
              <input
                type="text"
                placeholder="Search"
                className="togglebar-input"
              />

              <IoSearch
                style={{ position: "absolute", top: "28px", left: "28px" }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
        </div>

        <Offcanvas.Body className="togglebar-body">
          <div className="togglebar-content">
            <ul className="togglebar-list">
              <li className="togglebar-item">MRCOG PART 1</li>
              <li className="togglebar-item">MRCEM PRIMARY</li>
              <li className="togglebar-item">MRCEM INTERMEDIATE SBA</li>
              <li className="togglebar-item">MRCOG PART 2</li>
              <li className="togglebar-item">MRCPCH PART 1 (FOP AND TAS)</li>
              <li className="togglebar-item">MRCP PART 1</li>
              <li className="togglebar-item">PLAB 1 Exam</li>
              <li className="togglebar-item">AMC CAT EXAM</li>
              <li className="togglebar-item">USMLE STEP 1</li>
              <li className="togglebar-item">QATAR (IFOM FOR DOCTORS)</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Togglebar;


