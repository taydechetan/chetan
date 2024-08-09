import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Amazon from './amazon';
import Cart1 from './cart1';
import Card1 from './card1';
import Navbar1 from './navbar1';
import Signup from './component/signup';
import "./App.css";

export default function App() {
  const [show, setshow] = useState(false);
  const [cart, setcart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    const isPresent = cart.some(product => product.id === item.id);
    if (isPresent) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    setcart([...cart, item]);
    localStorage.setItem('list', JSON.stringify([...cart, item]));
  };

  return (
    <Router>
      <Navbar1 size={cart.length} setshow={setshow} />
      <Routes>
        <Route path="/amazon" element={<Amazon handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart1 cart={cart} setcart={setcart} />} />
        <Route path="/card" element={<Card1 />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {warning && <div className='warning-message text-light bg-success p-2'>Item is already added</div>}
    </Router>
  );
}


