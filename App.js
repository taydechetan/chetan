import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Amazon from './amazon';
import Cart1 from './cart1';
import Card1 from './card1';
import Navbar1 from './navbar1';
import Signup from './component/signup';
import Account from './account';
import Forgot from './forgot';
import Api from './api';
import Selling from './selling';
import Home from './home';
import Header from './header';
import Helpcont from './helpcont';
import Dailyd from './dailyd';
import Listitem from './listitem';
import { CartProvider } from "./CartContext";

import "./App.css";

export default function App() {
  const [show, setshow] = useState(false);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    const isPresent = cart.some(product => product.id === item.id);
    if (isPresent) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    setCart([...cart, item]);
    localStorage.setItem('list', JSON.stringify([...cart, item]));
  };

  return (
    <CartProvider>
      <Router>
        <Navbar1 size={cart.length} setshow={setshow} />
        <Routes>
          <Route path="/amazon" element={<Amazon handleClick={handleClick} />} />
          <Route path="/cart" element={<Cart1 cart={cart} setCart={setCart} />} />
          <Route path="/card" element={<Card1 />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/home" element={<Home />} />
          <Route path="/helpcont" element={<Helpcont />} />
          <Route path="/dailyd" element={<Dailyd />} />
          <Route path="/listitem" element={<Listitem />} />
          {/* You can add other routes here */}
        </Routes>
        {warning && <div className='warning-message text-light bg-success p-2'>Item is already added</div>}
        <Header />
      </Router>
    </CartProvider>
  );
}
