import React, { useEffect, useState } from "react";
import "./cart.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import Paypal from "./paypal";
import { FaCcPaypal } from "react-icons/fa";

export default function Cart1({ cart, setCart }) {
  const [price, setPrice] = useState(0);
  const [checkout, setcheckout] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);

  useEffect(() => {
    const getLocalItems = () => {
      const list = localStorage.getItem("cart");
      return list ? JSON.parse(list) : [];
    };

    const initialCart = getLocalItems();
    setCart(initialCart);
  }, [setCart]);

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handlePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice = parseFloat(item.product_prices?.price) || 0;
      const itemAmount = parseFloat(item.amount) || 1;
      total += itemPrice * itemAmount;
    });
    setPrice(total);
  };
  //

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: (item.amount || 1) + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: Math.max((item.amount || 1) - 1, 1) };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const togglePaypal = () => {
    setShowPaypal((prevState) => !prevState);
  };

  return (
    <>
      <div className="d-flex">
        <p>
          <FaAngleLeft />
        </p>
        <a href="/home">
          {" "}
          <u> Back to previous page</u>{" "}
        </a>
      </div>

      <article className="box">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart-box" key={item.id}>
              <div className="cart-img d-flex">
                <img
                  src={item.product_images[0].product_image}
                  // alt="img1"
                  // alt={item.name || item.title}
                  style={{ width: "100px" }}
                />
                <div className="d-flex">
                  <div className="productsjs d-flex">
                    <h4 className="ms-2 mt-2">Product-Name:{item.name}</h4>
                    <h4 className="ms-2 mt-2">{item.product_image}</h4>
                    <h4>Rating: {item.rating?.rate || "N/A"}</h4>
                  </div>
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
                <span>Price: ${item.product_prices?.price}</span>
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "20px",
              fontFamily: "serif",
              padding: "10px",
              width: "40%",
              color: "white",
            }}
          >
            Buy it Now
          </button>

          <button
            style={{
              width: "40%",
              padding: "10px",
              borderRadius: "20px",
              marginTop: "10px",
              border: "1px solid blue",
              color: "blue",
            }}
          >
            Add to Cart
          </button>

          <button
            style={{
              width: "40%",
              padding: "10px",
              borderRadius: "20px",
              marginTop: "10px",
              border: "1px solid blue",
              color: "blue",
              backgroundColor: "primary",
            }}
          >
            <FaRegHeart />
            Add to Watchlist
          </button>
        </div>

        {/* <div className="mt-3" style={{ marginLeft: "27%"}}>
          {checkout ? (
            <Paypal />
          ) : (
            <button
              // className="btn btn-primary"
              style={{
                borderRadius: "20px",
                width: "40%%",
                padding: "10px",
                borderRadius: "20px",
                marginTop: "10px",
                border: "1px solid blue",
                color: "blue",
                backgroundColor: "primary",
              }}
              // onClick={() => setcheckout(true)}
            >
             <FaCcPaypal style={{color:"black"}} /> PayPal
            </button>
          )}
        </div> */}

        <div
          className="mt-3"
          style={{
            width: "50%",
            border: "1px solid blue",
            borderRadius: "20px",
            margin:"20px auto"
          }}
        >
          <button
            onClick={togglePaypal}
            style={{
              height: "35px",
              width: "50%",
              border: "1px solid black",
              borderRadius: "15px",
              display: "flex",
              alignitems: "center",
              justifycontent: "center",
              margin: " 20px auto",
            }}
          >
            {showPaypal ? "Cancel Payment" : "Pay with Paypal"}
          </button>

          {showPaypal && <Paypal />}
        </div>

        <p className="fw-1 mt-3 ms-2" style={{ fontFamily: "Quicksand" }}>
          People want this. 24 people are watching this.
        </p>

        <div
          style={{
            height: "200px",
            width: "90%",
            backgroundColor: "#EEEEEE",
            margin: "10px auto",
          }}
          className="mt-5"
        >
          <div>
            <p
              className="mt-2 ms-3"
              style={{ fontFamily: "serif", fontSize: "20px" }}
            >
              Product ratings and reviews
            </p>
          </div>
          <div className="d-flex">
            <p className="ms-2">
              <GoStar className="ms-2" />
              <GoStar className="ms-1" />
              <GoStar className="ms-1" />
              <GoStar className="ms-1" />
              <GoStar className="ms-1" />
            </p>
            <p className="ms-2">Rating: No rating</p>
          </div>
          <hr style={{ width: "90%", color: "black", margin: "10px auto" }} />
          <p className="d-flex ms-3">
            Review <span className="ms-2 text-dark">(0)</span>
          </p>
          <p className="ms-2">No reviews yet</p>
        </div>
      </article>
    </>
  );
}
