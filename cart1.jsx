import React, { useEffect, useState } from "react";
import "./cart.css";

export default function Cart1({ cart, setcart }) {
  const [price, setPrice] = useState(0);

  // Function to calculate total price
  const handlePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemAmount = parseFloat(item.amount) || 1; // Default amount to 1 if not specified
      total += itemPrice * itemAmount;
    });
    setPrice(total);
    // console.log(`Total Price: ${total}`); 
  };

  useEffect(() => {
    handlePrice();
  }, [cart]); 

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setcart(updatedCart);
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: (item.amount || 1) + 1 }; 
      }
      return item;
    });
    setcart(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: (item.amount || 1) - 1};
      }
      return item;
    });
    setcart(updatedCart);
  };

  return (
    <>
      <article className="box">
        {cart.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart-img d-flex">
              <img src={item.img} alt={item.name} style={{ width: "100px" }} />
              <h4 className="ms-2 mt-2">Product: {item.name}</h4>
            </div>
            <div className="button-box">
              <button
                style={{ border: "none" }}
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
              <button style={{ border: "none", marginLeft: "10px" }}>
                {item.amount || 1}
              </button>
              <button
                className="ms-2"
                style={{ border: "none" }}
                onClick={() => handleDecrement(item.id)}
              >
                −
              </button>
            </div>
            <div className="priceeee">
              <span>Price: {item.price}/Rs</span>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
            <hr />
          </div>
        ))}
        <div className="totalpr">
          <p>Total Price of Your Cart:</p>
          <span style={{ color: "mediumslateblue" }}>
            Rs: {price.toFixed(2)}
          </span>{" "}
        </div>
      </article>
      <hr />
    </>
  );
}
