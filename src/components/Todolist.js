import React from "react";
// import components
import Tasks from "./Tasks";

const Todolist = () => {
  return (
    <div className="todo-list">
      <div className="todo-list__title-container">
        <h1 className="title">My Tasks</h1>
      </div>
      <Tasks />
    </div>
  );
};

export default Todolist;
