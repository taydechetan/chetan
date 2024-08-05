import React from 'react';
import "./card1.css"

export default function Card1({ item,handelclick }) {
  const { id, name, price, img } = item;
  return (
    <>
    {/* <div className='card border'>
      <div className='img-box mt-2'>
        <img src={img} alt="img" style={{width:'100px'}} />
      </div>
      <div>
        <h5>Id:-{id}</h5>
        <h4>Name:-{name}</h4>
        <h5>Price:-{price}/Rs</h5>
        <button className='btn btn-success'>Add to cart</button>
      </div>
    </div> */}

    <div className="card " style={{width:"200px"}} >
      <img src={img} className="card-img-top" alt="img"/>
    <div className="card-body">
    <h5>Id:-{id}</h5>
        <h4>Name:-{name}</h4>
        <h5>Price:-{price}/Rs</h5>
        <button onClick={()=>handelclick(item)} className='btn btn-success'>Add to cart</button>
    </div>
   </div>
    </>
  );
}


