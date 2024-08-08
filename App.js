import React, { useState } from 'react';
import Amazon from './amazon'; 
import Cart1 from './cart1';   
import Navbar1 from './navbar1'; 

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
  };

  return (
    <React.Fragment>
       <Navbar1 size={cart.length} setshow={setshow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart1 cart={cart} setcart={setcart} />
      )}
      {warning && <div className='text-light bg-success p-2'>Item is already added</div>}
    </React.Fragment>
  );
}
