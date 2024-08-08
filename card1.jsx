import React from 'react';
import './card1.css';

export default function card1({ item, handleClick }) {
  const { id, name, price, image } = item;

  return (
    <div className="card" style={{ width: '200px' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5>ID: {id}</h5>
        <h4>Name: {name}</h4>
        <h5>Price: ${price}</h5>
        <button onClick={() => handleClick(item)} className="btn btn-success">
          Add to Cart
        </button>
      </div>
    </div>
  );
}


