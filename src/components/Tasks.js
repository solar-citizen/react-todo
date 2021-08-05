import React, { useState, useEffect } from "react";
// import components
import Message from "./Message";
import Tasklist from "./Tasklist";
import Form from "./Form";

const Tasks = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  // runs once when the app starts
  useEffect(() => {
    getLocalTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // runs every time
  useEffect(() => {
    saveLocalTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  // send task(-s) to local storage
  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // get task(-s) from local storage
  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let taskLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(taskLocal);
    }
  };

  return (
    <div className="todo__tasks">
      <Message tasks={tasks} />
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
