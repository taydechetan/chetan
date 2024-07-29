// import React from 'react'
// import "./cart.css";

// export default function cart({data}) {
//   return (
//     <>

//     <div>
//       <h3 className='text-center'>Cart</h3>
//     </div>

//       <hr />

//     {
//       data.map((e)=>(
//        <div className='brand'>
//             <h3>Name = {e.name}</h3>
//             <h4>Price = {e.price}</h4>
//             <h5>Procesore={e.procesore} </h5>
//         </div>
//       ))
//     }

// {/*

//     <div className='brand'>
//       <h3>Name = {data.name}</h3>
//       <h4>Price = {data.price}</h4>
//       <h5>Procesore={data.procesore} </h5>
//     </div> */}

//     </>
//   )
// }

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Link, useNavigate } from "react-router-dom";
// import products from './products';

// const Cart = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const cart = location.state.cart || [];
//   const handleCheckout = () => {
//     alert('Checkout successful! Thank you for your order.');
//     navigate('/');
//   };

//   const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

//   const increaseQuantity = (productId) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === productId) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     navigate('/cart', { state: { cart: updatedCart } });
//   };

//   const decreaseQuantity = (productId) => {
//     const updatedCart = cart.map(item => {
//       if (item.id === productId && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     });
//     navigate('/cart', { state: { cart: updatedCart } });
//   };

//   return (
//     <div className="container">
//       <h2>Cart</h2>
//       <div className="row">
//         {cart.map((item, index) => (
//           <div className="card col-lg-3 col-md-4 col-sm-12 col-xl-2 mb-4" key={index}>
//             <img src={item.image} alt={item.name} style={{ width: '80px' }} />
//             <h4>{item.category}</h4>
//             Price: ${item.price}
//             <br />
//             Rating: {item.rating.rate}
//             <br />
//             <a className="btn btn-outline-primary btn-sm me-2" onClick={() => decreaseQuantity(item.id)}>+</a>
//             <a className="btn btn-outline-primary btn-sm me-2" onClick={() => increaseQuantity(products.id)}>-</a>
//           </div>
//         ))}
//       </div>
//       <h4>Total: ${cartTotal.toFixed(2)}</h4>
//       <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
//     </div>
//   );
// };

// export default Cart;




import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCart = location.state?.cart || [];
  const [cart, setCart] = useState(initialCart);

  const cartTotal = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    alert("Checkout successful! Thank you for your order.");
    navigate("/");
  };

  return (
    <>
      <h2>Cart</h2>
      <div className="btn1">
        {cart.map((item) => (
          <div
            className="card col-lg-3 col-md-4 col-sm-12 col-xl-2 mb-4"
            key={item.id}
          >
            <img src={item.image} alt={item.name} style={{ width: "80px" }} />
            <h4>{item.category}</h4>
            Price: ${item.price},
            Quantity: {item.quantity}
           

            <div className="d-flex mt-2">
            <button
              className="btn btn-outline-primary btn-sm me-2"
              style={{ color: "black",border: "none" }}
              onClick={() => decreaseQuantity(item.id)}
            >
              -
            </button>

            <button
              className="remove  btn btn-outline-danger btn-sm"
              style={{ color: "black",width:'100px' }}
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

            <button
              className="btn btn-outline-primary btn-sm me-2"
              style={{ color: "black",border: "none" }}
              onClick={() => increaseQuantity(item.id)}
            >
              +
            </button>
           
            </div>
          </div>
        ))}
      </div>
      <h4>Total: ${cartTotal.toFixed(2)}</h4>
      <button
        className="btn btn-danger"
        onClick={handleCheckout}
        style={{ width: "190px" }}
      >
        Proceed to Checkout
      </button>
      </>
  );
};

export default Cart;
