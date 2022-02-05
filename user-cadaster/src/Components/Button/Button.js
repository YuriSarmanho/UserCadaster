import React from "react";
import "./Button.css";

const Button = (props) => {
    return(
        <button className="main-button">
            {props.title}
        </button>
    )
};

export default Button;
