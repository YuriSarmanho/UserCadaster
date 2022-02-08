import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <input type={props.type} className="main-button" value={props.title} />
  );
};

export default Button;
