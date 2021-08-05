import React from "react";
// import components
import Tasks from "./Tasks";

const Todolist = () => {
  return (
    <div className="todo__list">
      <div>
        <h1 className="todo__title">My Tasks</h1>
      </div>
      <Tasks />
    </div>
  );
};

export default Todolist;
