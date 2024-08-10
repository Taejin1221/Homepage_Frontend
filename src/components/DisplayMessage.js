// ErrorMessage.js
import React from "react";

const DisplayMessage = ({ message, setMessage }) => {
  const displayHandler = () => {
    setTimeout(() => setMessage(""), 3000);
  };

  displayHandler();

  return (
    <div className="message-container">
      <h2 className="message-display">{message}</h2>
    </div>
  );
};

export default DisplayMessage;
