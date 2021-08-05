import React from "react";

const Form = ({ inputText, setInputText, tasks, setTasks }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTaskHandler = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    setInputText("");
  };

  return (
    <form className="add-task">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="add-task__input"
      />
      <button onClick={submitTaskHandler} className="add-task__btn">
        Add task
      </button>
    </form>
  );
};

export default Form;
