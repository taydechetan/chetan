// import React from 'react'
// import "./products.css" 
// import Card from './card'
// export default function products({data,setproductsdata}) {
//   return (
//     <>
//     <div className=' text-center'>
//       <h3>Products</h3>
//       <hr />
//       <div className='productsitem'>
//           <Card data ={data} setproductsdata={setproductsdata} name={"lenove"} price={20000} procesore ={"i3"}/>
//           <Card data ={data} setproductsdata={setproductsdata} name={"HP"} price={25000} procesore ={"i3"}/>
//           <Card data ={data} setproductsdata={setproductsdata} name={"Dell"} price={30000} procesore ={"i3"}/>
//           <Card data ={data} setproductsdata={setproductsdata} name={"Asus"} price={40000} procesore ={"i3"}/>
//       </div>
//      </div>
//     </>
//   )
// }

import React from 'react'
import "./products.css"

export default function products() {
  return (
    <>
    <div>
      <center>products</center>
    </div>

     {/* <div  className='card mt-3' >
          <img  src="https://m.media-amazon.com/images/I/61+r3+JstZL.jpg" class="card-img-top" alt="img"/>
             <div className="card-body">
             <h5 className="card-title">HP</h5>
             <p className="card-text">Procesor:i3 5th</p>
             <p className="card-text">Price: 12000</p>
             <button href="#" className="btn btn-primary">Add To Cart</button>
           </div>
     </div>
      */}
    </>
  )
}
