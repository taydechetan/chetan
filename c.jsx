import React from 'react'
import D from "./d"

export default function ({count,setcount}) {
  return (
    <div className='card'>
        <h3>c</h3>
        <h4>in:{count}</h4>
        <D count={count} setcount={setcount} />
    </div>
  )
}


