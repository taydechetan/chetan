import React from 'react'
import C from "./c"
export default function b({count,setcount}) {
  return (
    <div className='card'>
      <h3>B</h3>
      <h4>in :{count}</h4>
     <C count ={count} setcount={setcount}/>
    </div>
  )
}


