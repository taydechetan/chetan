import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Footer.css";
import { FaChevronRight } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
    } else {
      setError("");
      console.log("Submitted:", email);
    }
  };

  return (
    <footer
      className="footer  pt-5 pb-3"
      style={{ fontFamily: "Roboto', sans-serif" }}
    >
      <Container fluid className="px-5">
        <Row>
          {/* Column 1: About */}
          <Col lg={3} md={4} sm={6} xs={12} className="footer-about mb-4">
            <div className="footer-logo">
              <a href="home">
                <img
                  src="https://www.secrets4exams.com/frontend/images/secret4exams.png"
                  alt="Secrets4Exams Logo"
                  className="footer-logo-img"
                />
              </a>
              <h4 className="footer-title">SECRETS4EXAMS</h4>
              <p className="footer-description">
                Secrets4Exams functions as your personalized and intelligent
                companion for medical studies. With access to extensive
                resources and performance analysis.
              </p>
              <div className="footer-whatsapp-icon mt-3">
                <SiWhatsapp size={24} />
              </div>
            </div>
          </Col>

          <Col lg={3} md={4} sm={6} xs={12} className="footer-links mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list list-unstyled">
              <li className="footer-list-item">
                <MdOutlineKeyboardArrowRight style={{ fontSize: "20px" }} />
                <a href="/" className="footer-link text-light">
                  Home
                </a>
              </li>
              <li className="footer-list-item">
                <MdOutlineKeyboardArrowRight style={{ fontSize: "20px" }} />
                <a href="/aboutus" className="footer-link text-light">
                  About Us
                </a>
              </li>

              <li className="footer-list-item">
                <MdOutlineKeyboardArrowRight style={{ fontSize: "20px" }} />
                <a href="/faqq" className="footer-link text-light">
                  FAQ
                </a>
              </li>

              <li className="footer-list-item">
                <MdOutlineKeyboardArrowRight style={{ fontSize: "20px" }} />
                <a href="/contactus" className="footer-link text-light">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={4} sm={6} xs={12} className="footer-contact mb-4">
            <h5 className="footer-title">Stay in Touch</h5>
            <div className="footer-input-wrapper d-flex">
              <input
                type="email"
                className="footer-input-field"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="footer-submit-button"
                type="button"
                onClick={handleSubmit}
              >
                <FaChevronRight className="footer-submit-icon" />
              </button>
            </div>
            {error && <div className="email-error-message">{error}</div>}

            <p className="footer-description mt-3">
              Keep up to date with our latest news and special offers.
            </p>
          </Col>

          <Col lg={3} md={4} sm={6} xs={12} className="footer-qr mb-4">
            <a href="https://www.whatsapp.com/">
              <img
                src="https://www.secrets4exams.com/frontend/images/whatsappscanner.jpg"
                alt="WhatsApp QR Code"
                className="footer-qr-img"
              />
            </a>
          </Col>
        </Row>

        <div className="footer-bottom text-center mt-4">
          <p className="mb-0">
            Copyright © 2024 Secrets4Exams. All rights reserved. Operated by
            United Healthcare Solutions
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
