import React, { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './card.css';
import Products from "./products";


const Card = () => {
  const [cart, setCart] = useState([]);
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 20;
  

  useEffect(() => {
    fetch(" https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);


  // const products = [
  //   { id: 1, name: "HP 1", price: 14000 ,image:"https://www.digitaldreamsjaipur.com/wp-content/uploads/2020/07/hp-laptop-15s-du2058tu-1.jpg"},
  //   { id: 2, name: "Lenovo", price: 20000,image:"https://m.media-amazon.com/images/I/61IPAjrwNqL._AC_UF1000,1000_QL80_.jpg" },
  //   { id: 3, name: "Dell", price: 30000,image:"https://images-cdn.ubuy.co.in/651d646f5246af3e611f9458-dell-inspiron-3000-laptop-15-6-non-touch.jpg" },
  //   { id: 4, name: "Asus", price: 40000,image:"https://dlcdnwebimgs.asus.com/gain/71d58495-ee90-43a1-acbd-c931aa6d286a/" },
  // ];

  const addToCart = (product) => {
    const productWithQuantity = { ...product, quantity: 1 };
    setCart([...cart, productWithQuantity]);
  };
  
  const handleGoToCart = () => {
    alert("Are you show");
    console.log("Cart State:", cart);
    navigate("/cart", { state: { cart } });
  };

  return (
    <div className="container">
      <h2>Product List from Card</h2>
      <div className="row">
          
      {/* <div className=""> */}
        {product.map((product) => (
          <div className="card col-lg-3 col-md-4 col-sm-12 col-xl-2 mb-4" key={product.id}>
            <img src={product.image} alt={product.name} style={{width:'80px'}} />
            <h4>{product.category}</h4>
            Id:{product.id}
            <br />
            Price: ${product.price}
            <br />
            Rating: {product.rating.rate}
            <br />
            {product.title.length > 15 ? `${product.title.substring(0, 15)}...` : product.title}
            <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      {/* </div> */}
      </div>
      <button className="btn btn-primary text-center" onClick={handleGoToCart}>Go to Cart</button>
    </div>
  );
};

export default Card;



