import React, { useState, useEffect } from "react";
import "./Todo.css";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dates, setDates] = useState('');
  const [formatdate, setFormatDate] = useState('');
  const [formattime, setFormatTime] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Todo item added:", inputValue);
    if (!inputValue.trim()) return;
    setTask([...task, inputValue]);
    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setFormatDate(formattedDate);
      setFormatTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>Today - Date: {formatdate}</h4>
        <h4>Today - Time: {formattime}</h4>
        <h3>{dates}</h3>
        <h4>Todo list</h4>
        <div className="todo">
          <div>
            <input
              type="text"
              placeholder="Enter a task"
              value={inputValue}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>

      <div>
        <ul>
          {task.map((taskItem, index) => (
            <li key={index}>
              <span>{taskItem}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
