import React from 'react'
import "./selling.css"
import img from "./component/img1.jpeg";
import { useNavigate } from 'react-router-dom';

export default function Selling() {
  const navigate = useNavigate();
  const handethen =(()=>{
    navigate("/listitem")
  })
  return (
    <>
    <div className='selling-page' style={{display:"flex" , alignItems:'center',justifyContent:'space-between'}}>
      <div className='fw-bold fs-1 ms-5'>selling</div>
      <div className='mt-5 d-flex'>
        <button className='btn btn-primary' style={{borderRadius:"20px"}}>Products List</button>
        <button className='btn btn-primary ms-3' onClick={handethen} style={{borderRadius:'20px'}}>List an item</button>
      </div>
    </div>
    <div>
      <img src={img} alt="img1" className='selling-img' />
    </div>
    </>
  )
}

