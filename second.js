import React, { useContext } from 'react'
import { Graph } from './App'

export default function Second() {
    const {appcolor} =useContext(Graph);
  return (
    <div>
      <h5 style={{color:appcolor}}>codepan</h5>
    </div>
  )
}
