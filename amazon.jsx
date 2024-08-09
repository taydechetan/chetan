import React, { useEffect, useState } from "react";
import Card1 from "./card1";
import "./amazon.css";

export default function Amazon({ handleClick }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

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

  return (
    <section className="section">
      {products.map((item) => (
        <Card1 key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
}
