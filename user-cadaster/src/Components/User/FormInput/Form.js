import React, { useState, useRef } from "react";
import Button from "../../Button/Button";
import "./Form.css";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const cleanInput = () => {
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const isInputEmpty = (enteredName,enteredAge) => {
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.setShowErro(true);
      return;
    }
  };
  const isAgeNegative = (enteredAge) => {
    if (+enteredAge < 0) {
      props.setShowErro(true);
      return;
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    isInputEmpty(enteredName,enteredAge);
    isAgeNegative(enteredAge);
    props.setUserList(enteredName, enteredAge);
    cleanInput();
  };

  return (
    <form className="container-form" onSubmit={addUserHandler}>
      <div className="user-container">
        <h2>Usuário</h2>
        <input ref={nameInputRef} type="text" />
      </div>
      <div className="user-container">
        <h2>Idade</h2>
        <input ref={ageInputRef} type="number" />
      </div>
      <Button type={"submit"}>Adicionar</Button>
    </form>
  );
};
export default Form;
