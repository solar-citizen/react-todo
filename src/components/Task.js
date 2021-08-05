import React from "react";

const Task = ({ text, task, tasks, setTasks }) => {
  // events
  const deleteHandler = () => {
    setTimeout(() => {
      setTasks(tasks.filter((element) => element.id !== task.id));
    }, 750);
  };

  const completeHandler = () => {
    setTasks(
      tasks.map((element) => {
        if (element.id === task.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  return (
    <li
      className={`tasks-list__task ${task.completed ? "completed" : ""} ${
        deleteHandler ? "delete" : ""
      }`}
    >
      <input
        onClick={completeHandler}
        className="task__check"
        type="checkbox"
      />
      <span className="task__description">
        {text}
        <div onClick={deleteHandler} className="task__delete"></div>
      </span>
    </li>
  );
};

export default Task;
