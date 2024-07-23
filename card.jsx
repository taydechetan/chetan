// Card.jsx
// import { title } from "products";
import React, { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = () => {
  const [cart, setCart] = useState([]);
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 20;

  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products?limit=20")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);


  const products = [
    { id: 1, name: "HP 1", price: 14000 ,image:"https://www.digitaldreamsjaipur.com/wp-content/uploads/2020/07/hp-laptop-15s-du2058tu-1.jpg"},
    { id: 2, name: "Lenovo", price: 20000,image:"https://m.media-amazon.com/images/I/61IPAjrwNqL._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, name: "Dell", price: 30000,image:"https://images-cdn.ubuy.co.in/651d646f5246af3e611f9458-dell-inspiron-3000-laptop-15-6-non-touch.jpg" },
    { id: 4, name: "Asus", price: 40000,image:"https://dlcdnwebimgs.asus.com/gain/71d58495-ee90-43a1-acbd-c931aa6d286a/" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleGoToCart = () => {
    console.log("Cart State:", cart);
    navigate("/cart", { state: { cart } });
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            {/* <img src="https://www.digitaldreamsjaipur.com/wp-content/uploads/2020/07/hp-laptop-15s-du2058tu-1.jpg" style={{width:'100px'}} alt="img" /> */}
            <h3>{product.name}</h3>
            {/* <p>{product.image}</p> */}
            <img src={product.images} alt={product.name} style={{width:'100px'}} />
            {/* <p>Title:{title}</p> */}
            {/* <p>{category.name}</p> */}
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={handleGoToCart}>Go to Cart</button>
    </div>
  );
};

export default Card;

