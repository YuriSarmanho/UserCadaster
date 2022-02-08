import React, { useState } from "react";
import Form from "./FormInput/Form";
import Modal from "../ModalErro/Modal";
import CadasteredSection from "../CadasteredUsers/CadasteredSection";
import "./User.css";

const User = () => {
  const [userList, setUserList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addUserList = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random() }];
    });
  };

  return (
    <div className="container">
      {showModal ? (
        <Modal
          title={"ERROR"}
          message={"Algo não está certo, tente novamente"}
          setShowErro={setShowModal}
        />
      ) : (
        ""
      )}
      <div className="UserCadaster-container">
        <Form setUserList={addUserList} setShowErro={setShowModal}/>
      </div>
      <CadasteredSection db={userList} />
    </div>
  );
};

export default User;
