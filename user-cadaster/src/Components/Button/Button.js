import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <input
      type={props.type}
      onClick={props.onClick}
      className="main-button"
      value={props.children}
    />
  );
};

export default Button;
