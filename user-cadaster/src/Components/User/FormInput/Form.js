import React from "react";
import './Form.css'

const Form = () => {
  return (
    <div className="container-form">
      <div className="userName-container">
        <h2>Usuário</h2>
        <input type={"text"} />
      </div>

      <div className="userAge-container">
        <h2>Idade</h2>
        <input type={"number"} maxLength="3" />
      </div>
    </div>
  );
};
export default Form;
