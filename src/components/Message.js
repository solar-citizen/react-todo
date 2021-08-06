import React from "react";

const Message = ({ tasks }) => {
  if (tasks.length === 0) {
    return <div className="notasks-message">No tasks yet.</div>;
  } else {
    return null;
  }
};

export default Message;
