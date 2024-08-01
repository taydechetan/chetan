// import React from 'react';
// import Signup from './component/signup';
// import Login from './component/login';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';

// export default function App() {
//   return (
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path='/' element={<Signup />} />
//     //     <Route path='/login' element={<Login />} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// }

// *//
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { employeedata } from "./employeedata";

// export default function App() {
//   const [data, setData] = useState([]);
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [age, setAge] = useState(0);
//   const [id, setId] = useState(null);
//   const [isUpdate, setIsUpdate] = useState(false);

//   useEffect(() => {
//     setData(employeedata);
//   }, []);

//   const handleEdit = (id) => {
//     const dt = data.find((item) => item.id === id);
//     if (dt) {
//       setIsUpdate(true);
//       setFirstname(dt.firstname);
//       setLastname(dt.lastname);
//       setAge(dt.age);
//       setId(dt.id);
//     }
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this item?")) {
//       const updatedData = data.filter((item) => item.id !== id);
//       setData(updatedData);
//     }
//   };

//   const handleSave = () => {
//     if (firstname && lastname) {
//       const newItem = {
//         id: data.length ? Math.max(...data.map(item => item.id)) + 1 : 1,
//         firstname,
//         lastname,
//         age
//       };
//       setData([...data, newItem]);
//       handleClear();
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   const handleUpdate = () => {
//     if (id !== null) {
//       const updatedData = data.map((item) =>
//         item.id === id
//           ? { ...item, firstname, lastname, age }
//           : item
//       );
//       setData(updatedData);
//       handleClear();
//     }
//   };

//   const handleClear = () => {
//     setFirstname("");
//     setLastname("");
//     setAge(0);
//     setId(null);
//     setIsUpdate(false);
//   };

//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//         <div>
//           <label>
//             Firstname:
//             <input
//               type="text"
//               placeholder="Enter a first name"
//               onChange={(e) => setFirstname(e.target.value)}
//               value={firstname}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Lastname:
//             <input
//               type="text"
//               placeholder="Enter a last name"
//               onChange={(e) => setLastname(e.target.value)}
//               value={lastname}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Age:
//             <input
//               type="number"
//               placeholder="Enter age"
//               onChange={(e) => setAge(Number(e.target.value))}
//               value={age}
//             />
//           </label>
//         </div>

//         <div className="mt-4" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
//           {!isUpdate ? (
//             <button
//               className="btn btn-warning"
//               style={{ width: "80px", height: "30px" }}
//               onClick={handleSave}
//             >
//               Save
//             </button>
//           ) : (
//             <button
//               className="btn btn-info"
//               style={{ width: "80px", height: "30px" }}
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           )}

//           <button
//             className="btn btn-secondary ms-2"
//             style={{ width: "60px", height: "30px" }}
//             onClick={handleClear}
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Firstname</th>
//               <th>Lastname</th>
//               <th>Age</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.Firstname}</td>
//                 <td>{item.astname}</td>
//                 <td>{item.age}</td>
//                 <td>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleEdit(item.id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-success mx-3"
//                     onClick={() => handleDelete(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// *//
import React, { useEffect, useState } from "react";
import "./App.css";
import { employeedata } from "./employeedata";

export default function App() {
  const [data, setData] = useState([]);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(null);

  useEffect(() => {
    setData(employeedata);
  }, []);

  const handleEdit = (id) => {
    const dt = data.find((item) => item.id === id);
    if (dt) {
      setFirstname(dt.Firstname);
      setLastname(dt.Lastname);
      setAge(dt.age);
      setId(dt.id);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      const deletedData = data.filter((item) => item.id !== id);
      setData(deletedData);
    }
  };

  const handleSave = () => {
    if (Firstname.length > 0 && Lastname.length > 0) {
      if (id === null) {
        const newData = {
          id: data.length ? Math.max(...data.map(item => item.id)) + 1 : 1,
          Firstname,
          Lastname,
          age
        };
        setData([...data, newData]);
      } else {
        const updatedData = data.map((item) =>
          item.id === id
            ? { ...item, Firstname, Lastname, age }
            : item
        );
        setData(updatedData);
      }
      clearForm();
    }
  };

  const handleClear = () => {
    clearForm();
  };

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setAge(0);
    setId(null);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <label>
            Firstname:
            <input
              type="text"
              placeholder="Enter a first name"
              onChange={(e) => setFirstname(e.target.value)}
              value={Firstname}
            />
          </label>
        </div>

        <div>
          <label>
            Lastname:
            <input
              type="text"
              placeholder="Enter a last name"
              onChange={(e) => setLastname(e.target.value)}
              value={Lastname}
            />
          </label>
        </div>

        <div>
          <label>
            Age:
            <input
              type="number"
              placeholder="Enter age"
              onChange={(e) => setAge(Number(e.target.value))}
              value={age}
            />
          </label>
        </div>
        <button
          className="btn btn-warning"
          style={{ width: "50px", height: "50px" }}
          onClick={handleSave}
        >
          Save
        </button>
        <button
          // className="btn btn-info"Revised The useContext api and hooks 
          style={{ width: "50px", height: "50px" }}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Firstname}</td>
                <td>{item.Lastname}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-success mx-3"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
