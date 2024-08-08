import React, { useEffect, useState } from "react";
import "./cart.css";

export default function Cart1({ cart, setcart }) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemAmount = parseFloat(item.amount) || 1;
      total += itemPrice * itemAmount;
    });
    setPrice(total);
  };

  const getLocalItems = () => {
    const list = localStorage.getItem("list");
    return list ? JSON.parse(list) : [];
  };

  useEffect(() => {
    const initialCart = getLocalItems();
    setcart(initialCart);
  }, [setcart]);

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setcart(updatedCart);
    localStorage.setItem('list', JSON.stringify(updatedCart));
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: (item.amount || 1) + 1 };
      }
      return item;
    });
    setcart(updatedCart);
    localStorage.setItem("list", JSON.stringify(updatedCart));
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: Math.max((item.amount || 1) - 1, 1) };
      }
      return item;
    });
    setcart(updatedCart);
    localStorage.setItem("list", JSON.stringify(updatedCart));
  };

  return (
    <>
      <article className="box">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart-box" key={item.id}>
              <div className="cart-img d-flex">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px" }}
                />
                <div className="d-flex">
                    <h4 className="ms-2 mt-2">Product: {item.category}</h4>
                    <h4>Rating:{item.rating.rate}</h4>
                </div>
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
                <span>Price: ${item.price}</span>
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
          ))
        ) : (
          <p className="text-danger">No items in the cart.</p>
        )}
        <div className="totalpr">
          <p className="fw-bold">Total Price of Your Cart:</p>
          <span className="fw-bold" style={{ color: "mediumslateblue" }}>
            Rs: {price.toFixed(2)}
          </span>
        </div>
      </article>
      <hr />
    </>
  );
}
