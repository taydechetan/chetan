import React, { useState, useEffect } from "react";
import Card1 from "./card1";
import "./amazon.css";

export default function Amazon(item) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log("Item added to cart:", item);
    setCart([...cart, item]);
    localStorage.setItem("list", JSON.stringify([...cart, item]));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  let limitsproducts = products.slice(0, 5);

  return (
    <>
      <div
        className="d-flex"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <h3 className="text-center fw-bold">Shop Category</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:"space-around"
            }}
          >
            {limitsproducts.map((item) => (
              <div key={item.id} style={{ marginBottom: "20px" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "70px", borderRadius: "50%" }}
                />
                {/* <p>{item.title}</p> */}
                {/* <p>{item.price}</p> */}
              </div>
            ))}
          </div>
        </div>
        <section className="sectiont">
          {products.map((item) => (
            <Card1 key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      </div>
    </>
  );
}
