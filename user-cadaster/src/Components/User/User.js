import React from "react";
import Form from "./FormInput/Form";
import Button from "../Button/Button";
import CadasteredSection from "../CadasteredUsers/CadasteredSection";
import "./User.css";

const User = () => {
  const db = [
    {
      name: "Pedro",
      age: "32",
    },
    {
      name: "Yuri",
      age: "21",
    },
    {
      name: "Renata",
      age: "46",
    },
  ];

  return (
    <div className="container">
      <div className="UserCadaster-container">
        <Form/>
        <Button className="addUser-button" title={"Adicionar"} />
      </div>
      <CadasteredSection db={db} />
    </div>
  );
};

export default User;
