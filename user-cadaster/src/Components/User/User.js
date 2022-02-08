import React, { useState } from "react";
import Form from "./FormInput/Form";
import Modal from "../ModalErro/Modal";
import CadasteredSection from "../CadasteredUsers/CadasteredSection";
import "./User.css";

const User = () => {
  const [userList, setUserList] = useState([]);

  const addUserList = (uName,uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random() }];
    });
  };

  return (
    <div className="container">
      <Modal title={"Um erro aconteceu"} message={"Escreva uma valor válido no nome"}/>
      <div className="UserCadaster-container">
        <Form setUserList={addUserList} />
      </div>
      <CadasteredSection db={userList} />
    </div>
  );
};

export default User;
