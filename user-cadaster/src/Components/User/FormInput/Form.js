import React, { useState } from "react";
import Button from "../../Button/Button";
import "./Form.css";

const Form = (props) => {
  //Pegar o input de nome e idade, e salvar no state
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const addAgeHandler = (event) => {
    setUserAge(event.target.value);
  };
  
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 0) {
      return;
    }
    props.setUserList(userName, userAge);
    setUserAge("");
    setUserName("");
  };

  return (
    <form className="container-form" onSubmit={addUserHandler}>
      <div className="user-container">
        <h2>Usuário</h2>
        <input onChange={addNameHandler} value={userName} type="text" />
      </div>
      <div className="user-container">
        <h2>Idade</h2>
        <input onChange={addAgeHandler} value={userAge} type="number" />
      </div>
      <Button type={"submit"}>Adicionar</Button>
    </form>
  );
};
export default Form;
