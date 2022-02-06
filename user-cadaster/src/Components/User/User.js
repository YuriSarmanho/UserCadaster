import React from "react";
import UserName from "./InputName/UserName";
import Password from "./InputAge/UserAge";
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
        <UserName />
        <Password />
        <Button className="addUser-button" title={"Adicionar"} />
      </div>
      <CadasteredSection db={db} />
    </div>
  );
};

export default User;
