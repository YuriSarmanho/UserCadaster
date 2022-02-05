import React from "react";
import UserName from "./AddName/UserName";
import Password from "./AddAge/UserAge";
import Button from "../Button/Button";
import "./User.css";

const User = () => {
  return (
    <div className="container">
      <div className="UserCadaster-container">
        <UserName />
        <Password />
        <Button className="addUser-button" title={'Add User'}/>
      </div>
    </div>
  );
};

export default User;
