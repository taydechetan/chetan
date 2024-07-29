// import React from 'react'
// import "./products.css"
// import Card from './card'
// export default function products({data,setproductsdata}) {
//   return (
//     <>
//     <div className=' text-center'>
//       <h3>Products</h3>
//       <hr />
//       <div className='productsitem'>
//           <Card data ={data} setproductsdata={setproductsdata} name={"lenove"} price={20000} procesore ={"i3"}/>
//           <Card data ={data} setproductsdata={setproductsdata} name={"HP"} price={25000} procesore ={"i3"}/>
//           <Card data ={data} setproductsdata={setproductsdata} name={"Dell"} price={30000} procesore ={"i3"}/>
//           <Card data ={data} setproductsdata={setproductsdata} name={"Asus"} price={40000} procesore ={"i3"}/>
//       </div>
//      </div>
//     </>
//   )
// }


import React, { useState, useEffect } from "react";
import "./products.css";
import Card from "./card";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="products-header">
        <h2>Products For purchase</h2>
      </div>
      <hr />
      <Card data={products} />
      <Link to="/cart">Go to Cart</Link>
    </>
  );
}
