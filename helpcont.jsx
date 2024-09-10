import React, { useState } from "react";
import Toastify from "toastify-js";
// import 'toastify-js/src/toastify.min.css';
import "./help.css";
import { ToastType } from "react-toastify";
import toastify from "toastify-js";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Helpcont() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const[notification , setnotification] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    Toastify({
      text: "",
      duration: 0,
    }).showToast();

    let error = false;
    if (name.trim() === 0) {
      Toastify({
        text: (
          <div style="display: flex; align-items: center;">
            <span style="font-size: 24px; color: #A02334; margin-right: 10px;">Today completed a atozbay Help-Contact page 
              ${RiErrorWarningFill}
            </span>
            <span>"Please enter a name"</span>
          </div>
        ),
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(toright, #7A1CAC, #ffc371)",
      }).showToast();
      error = true;
    }

    if (email.trim() === "") {
      Toastify({
        text: (
          <div style="display: flex; align-items: center;">
            <p
              class="<RiErrorWarningFill />"
              style="color: black; margin-right: 10px;"
            ></p>
            <span>"Please enter a name"</span>
          </div>
        ),
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #7A1CAC, #ffc371)",
      }).showToast();
      error = true;
    }

    if (subject.trim() === "") {
      Toastify({
        text: "Please Enter a subject",
        duration: 3000,
        gravity: "right",
        backgroundColor: "linear-gradient(to right, #7A1CAC, #ffc371)",
      }).showToast();
      error = true;
    }

    if (phone.trim() === "") {
      Toastify({
        text: "Please enter a phone Number",
        duration: 3000,
        gravity: "top",
        backgroundColor: "linear-gradient(to right, #7A1CAC, #ffc371)",
      }).showToast();
      error = true;
    }

    
    if (message.trim() === "") {
      toastify({
        text: "Please enter a message",
        duration: 3000,
        gravity: "top",
        backgroundColor: "linear-gradient(to right, #7A1CAC, #ffc371)",
      }).showToast();
      error = true;
    }

    if (error) return;

    setName("");
    setEmail("");
    setSubject("");
    setPhone("");
    setMessage("");

    Toastify({
      text: "Form submitted successfully!",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true,
    }).showToast();
  };

  return (
    <>
      <form className="onsubmite" onSubmit={handleSubmit}>
        <h3 className="text-center fw-bold">Contact Us</h3>
        <p className="text-center">
          We’re here to help! Whether you have a question, feedback, or need
          assistance, feel free to reach out to us through any of the methods
          below. Our team is ready to assist you.
        </p>
        <div className="d-flex">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3 ms-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex">
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter your subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="mb-3 ms-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Enter your message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{width:"100px"}}>
          Submit
        </button>
      </form>
    </>
  );
}
