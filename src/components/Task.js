import React from "react";

const Task = ({ text, task, tasks, setTasks }) => {
  // events
  const deleteHandler = () => {
    setTimeout(() => {
      setTasks(tasks.filter((taskItem) => taskItem.id !== task.id));
    }, 100);
  };

  const completeHandler = () => {
    setTasks(
      tasks.map((taskItem) => {
        if (taskItem.id === task.id) {
          return {
            ...taskItem,
            completed: !taskItem.completed,
          };
        }
        return taskItem;
      })
    );
  };

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <input onClick={completeHandler} className="task-input" type="checkbox" />
      <span className="task-description">
        {text}
        <div onClick={deleteHandler} className="task-description__delete"></div>
      </span>
    </li>
  );
};

export default Task;
