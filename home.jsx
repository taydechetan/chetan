import React, { useState, useEffect } from "react";
import "./home.css";
import video from "./video.mp4";
import Products from "./products";
// import Nav from './nav';
import Card from "./card";
import products from "./products";

export default function Home() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch(" https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      {/* <Nav/> */}
      <div className="home">
        {/* <div id='videos'>
        <video src={video} controls autoplay muted loop>
        </video>
      </div> */}

        <div className="content">
          <h2 className=" text-white">Welcome To The New York City</h2>
          <p className="fs-4 text-danger">Deal of The Day</p>

          {/* <div>
            <button className='rounded-pill btn btn-primary'>Know More</button>
            <button className='rounded-pill btn btn-success'>Category</button>
        </div> */}
        </div>
      </div>

      <div className="mt-2">
        <Card data={product} />
        {/* <Products/> */}
      </div>
    </>
  );
}
