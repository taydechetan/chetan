import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  // const [todo, setTodo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    setDesc("");
    setTitle("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
    toast.success(`List "${mainTask[i].title}" deleted successfully!`);
  };

  const handleTodo = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const render = mainTask.map((t, i) => (
    <ol key={i}>
      <li>
        <div className="d-flex justify-content-between">
          <h5>Fisrtname={t.title},</h5>
          <h5>Lastname={t.desc}</h5>
          <button className="btn btn-danger" onClick={() => deleteHandler(i)}>
            Remove
          </button>
        </div>
      </li>
    </ol>
  ));

  return (
    <>
      <form onSubmit={submitHandler}>
        <h3
          onClick={handleTodo}
          className="text-center"
          style={{ color: "mediumslateblue" }}
        >
          Todo List
        </h3>
        <div className="onsubmit d-flex">
          <div>
            <input
              type="text"
              placeholder="Enter a Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter a Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button className="btn btn-success ms-2">Add This</button>
        </div>
      </form>
      <hr />
      <div
        className="remove p-2 d-flex m-auto"
        style={{ backgroundColor: "#FEFAE0", width: "80%" }}
      >
        <ul>{render}</ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
