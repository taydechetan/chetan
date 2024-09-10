import React, { useContext } from 'react'
import { Graph } from './App'
import Second from './second';
export default function Search() {
  const{appcolor} = useContext(Graph);
  // console.log(appcolor);
  return (
    <div>
     <h5 style={{color:appcolor}}>searchbar</h5>
     <Second/>
    </div>
  )
}


