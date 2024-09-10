import React, { useState, useEffect } from "react";
import "./home.css";
import img from "./component/img1.jpeg";
import books from "./component/books.jpg";
import flow from "./component/flow3.jpg";
import Api from "./api";
import { FaStar } from "react-icons/fa";
import Header from "./header";
import Collectinbar from "./collectinbar";
import Amazon from "./amazon";
import axios from "axios";
import Dailyd from "./dailyd";

const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deals, setDeals] = useState([]);
  const [page, setPage] = useState(1);
  const[hasMore,setHasMore] =useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(
          `https://atozbay.com/adminatoz/public/api/shop-products-list?page=${page}&limit=${ITEMS_PER_PAGE}`
        );

        const newDeals = response.data.result;

        if (newDeals.length < ITEMS_PER_PAGE) {
          setHasMore(false);
        }

        const existingDealIds = new Set(deals.map((deal) => deal.id));
        const uniqueNewDeals = newDeals.filter(
          (deal) => !existingDealIds.has(deal.id)
        );

        setDeals((prevDeals) => [...prevDeals, ...uniqueNewDeals]);
      } catch (error) {
        setError("Failed to load deals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <img src={img} class="d-block w-100" alt="img1" />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src={books} class="d-block w-100" alt="img2" />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img src={flow} class="d-block w-100" alt="img3" />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div
        className="container-flude contactn mt-5"
        style={{
          backgroundColor: "#EEEEEE",
          height: "200px",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px auto",
          borderRadius: "20px",
        }}
      >
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <h3 className="fw-bold">Feel special this summer with 15% off*</h3>
            <p>Save on luxury jewelry, watches and handbags for you.</p>
            <a href="#" style={{ textDecoration: "none" }}>
              *Min. spend $300. Max. discount $100
            </a>
          </div>

          <div className="coopan col-lg-4 col-md-4 col-sm-4 fw-bold border ms-5">
            Code: LUXUS15
          </div>
        </div>
      </div>

      {/* <Amazon /> */}
      <Dailyd/>
      <Collectinbar />
      <Api />
    </>
  );
}
