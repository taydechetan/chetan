import React, { useState } from "react";
import "./App.css";
import { render } from "@testing-library/react";

export default function App() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const[maintask,settask] =useState([]);
  const submithandeler = (e) => {
    e.preventDefault();
    // console.log("First-Name=",title);
    // console.log("Last-Name=",desc);
    settask([...maintask,{title,desc}])
    console.log(maintask)
    setdesc("");
    settitle("");
  };

  const deletHandeler= (i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    settask(copytask);
  }

  const render=maintask.map((t,i)=>{
     return(
     <ol key={i}>
      <li>
       <div className="d-flex justify-content-between">
         <h5>{t.title}</h5>
         <h5>{t.desc}</h5>
         <button className="btn btn-danger" onClick={()=>{deletHandeler()}} >Remove</button>
         </div>
       </li>
     </ol>
     )
  })

  return (
    <>
    {/* <div className="container-fluid"> */}
      <form onSubmit={submithandeler}>
        <h3 className="text-center" style={{ color: "mediumslateblue" }}>Todo List</h3>
        <div className="onsubmit d-flex">
          <div>
            <input
              type="text"
              placeholder="Enter a Firstname"
              value={title}
              onChange={(e)=>{
                settitle(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter a Lastname"
              value={desc}
              onChange={(e)=>{
                setdesc(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-success ms-2">Add This</button>
        </div>
      </form>
    <hr />
      <div className="remove p-2 d-flex m-auto" style={{backgroundColor:"#FEFAE0",width:"80%"}} >
        <ul>{render}</ul>
      </div>
    {/* </div> */}
    </>
  );
}

