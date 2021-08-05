import React, { useState, useEffect } from "react";
// import components
import Message from "./Message";
import Tasklist from "./Tasklist";
import Form from "./Form";

const Tasks = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  // use effect
  useEffect(() => {
    saveLocalTasks();
  }, [tasks]);

  // send task(-s) to local storage
  const saveLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  return (
    <div className="todo__tasks">
      <Message />
      <Tasklist tasks={tasks} setTasks={setTasks} />
      <Form
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
      />
    </div>
  );
};

export default Tasks;
