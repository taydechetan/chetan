import React,{useState} from 'react'
import A from "./a"
import "./App.css"


export default function App() {
  let [count,setcount] = useState(0)
  return (
    <div className='card'>

        <center>
          hell bye a jsx
          <h4>App:{count}</h4>
          <button className='btn' onClick={()=>(setcount(count+1))}>click me</button>
        </center>

          <A count = {count} setcount={setcount}/>
    </div>
  )
}

