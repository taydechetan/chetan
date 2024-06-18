import React from 'react'
import "./App.css"
import B from "./b"

export default function a({count,setcount}) {
  return (
    <div className='card'>
        <h3>A </h3>
        <h4> in : {count}</h4>
        <B count={count} setcount={setcount}/>
    </div>
  )
}
