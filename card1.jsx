import React from "react";
import "./card1.css";

export default function Card1({ item, handleClick }) {
  const {
    id = "unknown",
    title = "unknown",
    price = 0,
    image = "",
    category = "",
    rating = {},
  } = item || {};

  return (
    <>
    <div className="card">
  <img src={image} className="card-img-top" alt={title} />
  <div className="card-body">
    <h5>ID: {id}</h5>
    <h4>Name: {category}</h4>
    <h5>Price: ${price}</h5>
    <h5>Rating: {rating.rate}</h5>
    <button onClick={() => handleClick(item)} className="btn btn-success">
      Add to Cart
    </button>
  </div>
</div>
</>
  );
}
