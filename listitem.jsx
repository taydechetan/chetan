import React from "react";
import "./listitem.css";
import { IoSearchOutline } from "react-icons/io5";
import atozbay from "./component/atozbay.png";
import { Link } from "react-router-dom";

export default function listitem() {
  return (
    <>
      <div className="text-center" href="home">
        <Link to="/home">
          <img src={atozbay} alt="img1" style={{ height: "33px" }} />
        </Link>
      </div>
      <hr />

      <h3 className="fw-bold ms-5">Start Your Listing</h3>
      <div className="d-flex ms-5" style={{ margin: "20px auto" }}>
        <div className="d-flex position-relative">
          <input
            type="text"
            placeholder="Tell us what your're selling"
            className="form-control"
            style={{
              borderRadius: "20px",
              width: "350px",
              height: "40px",
              boxshadow: "10px 10px 0px 0px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>

        <div className="serchty ms-2">
          <p
            style={{
              backgroundColor: "blue",
              borderRadius: "14px",
              color: "white",
              padding: "7px 7px",
            }}
          >
            <IoSearchOutline />
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="cardy col-lg-4 col-md-6 mb-4">
          <div
            class=" ms-3"
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <div class="card-body">
              <p className="card-title text-white">
                Type keywords like brand, model, or other details (ISBN, MPN,
                VIN) in the search box above Type keywords like brand, model, or
                other details (ISBN, MPN, VIN) in the search box above
              </p>
              <img
                src="https://i.ebayimg.com/00/s/MTIwWDIwNg==/z/cYwAAOSw5llkQud-/$_57.PNG"
                alt="img1"
                style={{
                  width: "100px",
                  height: "100px",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="cardy col-lg-4 col-md-6 mb-4">
          <div
            class=" ms-3"
            style={{
              backgroundColor: "orange",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <div class="card-body">
              <p className="card-title text-white">
                Type keywords like brand, model, or other details (ISBN, MPN,
                VIN) in the search box above Type keywords like brand, model, or
                other details (ISBN, MPN, VIN) in the search box above
              </p>
              <img
                src="https://i.ebayimg.com/00/s/MTgzWDE3Ng==/z/EIUAAOSwNE9kQud-/$_57.PNG"
                alt="img2"
                style={{
                  width: "100px",
                  height: "100px",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="cardy col-lg-4 col-md-6 mb-4">
          <div
            class=" ms-3"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <div class="card-body">
              <p className="card-title text-white">
                Type keywords like brand, model, or other details (ISBN, MPN,
                VIN) in the search box above Type keywords like brand, model, or
                other details (ISBN, MPN, VIN) in the search box above
              </p>
              <img
                src="https://i.ebayimg.com/00/s/MjQ2WDI0Ng==/z/SXoAAOSwkGdkQX2Z/$_57.PNG"
                alt="img1"
                style={{
                  width: "100px",
                  height: "100px",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
