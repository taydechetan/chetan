import React, { useState } from 'react'
import Navbar1 from './navbar1'
import Cart1 from './cart1'
import Amazon from './amazon'
import cart1 from './cart1'
export default function App() {
  const[show,setshow] =useState('')
  const[cart,setcart] =useState([]);
  const[warning,setwarning]=useState(false)
  const handelclick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false);
      }, 2000);
      return;
    }
    setcart([...cart,item]);
  };

  const handelchange =(item,d)=>{
    console.log(item,d)
  }

  return (
    <React.Fragment>
      <Navbar1 size={cart.length} setshow={setshow} />
      {
        show? <Amazon handelclick={handelclick}/> : <Cart1 cart={cart} setcart={setcart} handelchange={handelchange} />
      }
     
      {
        warning&& <div className='danger'>item is already added</div>
      }
    </React.Fragment>
  )
}


