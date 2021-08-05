import React from "react";
import "./App.css";
// Import components
import Profile from "./components/Profile";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <div className="App">
      <main>
        <div className="todo">
          <Profile />
          <Todolist />
        </div>
      </main>
    </div>
  );
};

export default App;
