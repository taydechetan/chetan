import React from "react";
import "./header.css";

export default function header() {
  return (
    <>
      <div className="headerbar container-flude">
        <div className="row mt-3">
            <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-2 col-md-2 col-sm-2 mt-2">
            <ul style={{listStyle:"none"}}>
                <p>Buy</p>
                <li>Registration</li>
                <li>atozbay Money Back Guarantee</li>
                <li>Bidding & buying help</li>
                <li>Stores</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 mt-2">
            <ul style={{listStyle:"none"}}>
                <p>Sell</p>
                <li>Start selling</li>
                <li>Learn to sell</li>
                <li>Affiliates</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-2 mt-2">
            <ul  style={{listStyle:"none"}}>
              <p>Stay connected</p>
              <li>atozbay Blogs</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div> 

          <div className="col-lg-2 col-md-2 col-sm-2 mt-2">
            <ul style={{listStyle:"none"}}>
                <p>About atozbay</p>
                <li>Company info</li>
                <li>Privacy Policy</li>
                <li>Terms & Services</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-2 mt-2">
            <ul style={{listStyle:"none"}}>
                <p>Help & Contact</p>
                <li>Seller Information Center</li>
                <li>Contact us</li>
            </ul>
          </div>
            <div className="col-lg-1 col-md-1 col-sm-1"></div>
        </div>
      </div>
      
      <div
        className="mt-4"
        style={{ fontFamily: "revert", marginLeft: "30px", fontSize: "12px" }}
      >
        © 2024 Copyright:Copyright © 1995-2024 atozbay Inc. All Rights Reserved.
        Accessibility, User Agreement , Privacy, Payments Terms of Use, Cookies,
        CA Privacy Notice, Your Privacy Choices and AdChoice
      </div>
    </>
  );
}
