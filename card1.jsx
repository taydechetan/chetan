import React from "react";
import "./card1.css";
import { useNavigate } from "react-router-dom";

export default function Card1({ item, handleClick }) {
  const {
    id = "unknown",
    title = "unknown",
    price = 0,
    image = "",
    category = "",
    rating = {},
  } = item || {};
  const navigate = useNavigate();

  // const handleGoToCart = () => {
  //   console.log("Cart1 State:", item);
  //   navigate("/cart", { state: { item } });
  // };

  return (
    <div className="card" style={{ width: "200px" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5>ID: {id}</h5>
        <h4>Name: {category}</h4>
        <h5>Price: ${price}</h5>
        <h5>Rating: {rating.rate}</h5>
        <button onClick={() => handleClick(item)} className="btn btn-success">
          Add to Cart
        </button>
        {/* <button onClick={handleGoToCart} className="btn btn-primary">
          Go to Cart
        </button> */}
      </div>
    </div>
  );
}
