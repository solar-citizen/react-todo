import React from "react";
// import components
import Task from "./Task";

const Tasklist = ({ tasks, setTasks }) => {
  return (
    <ul className="task-container">
      {tasks.map((task) => (
        <Task
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          key={task.id}
          text={task.text}
        />
      ))}
    </ul>
  );
};

export default Tasklist;
