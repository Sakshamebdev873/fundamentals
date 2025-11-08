import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [todo, setTodo] = useState("");
  const [show, setShow] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
setShow((prev)=> [...prev,todo])
setTodo("")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={(e) => setTodo(e.currentTarget.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      {show.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </>
  );
};

export default App;
