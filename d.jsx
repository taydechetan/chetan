import React from 'react'

export default function d({count,setcount}) {
  return (
    <div className='card'>
        <h3>D</h3>
        <h4>in:{count}</h4>
        <button className='btn' onClick={()=>(setcount(count+1))}>
            add me
        </button>
    </div>
  )
}
