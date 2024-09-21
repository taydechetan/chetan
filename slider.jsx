import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button className="close-btn">X</button>
      </div>
      <ul className="menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Faq</li>
        <li>Contact Us</li>
        <li>MRCS DHONS PART A</li>
        <li>MRCS PART A</li>
        <li>MRCGP PART 1</li>
        <li>MRCEM PRIMARY</li>
        <li>MRCEM INTERMEDIATE SBA</li>
        <li>MRCOG PART 1</li>
        <li>MRCOG PART 2</li>
      </ul>
    </div>
  );
};

export default Sidebar;
