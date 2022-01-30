import React from "react";
import UserName from "./AddName/UserName";
import Password from "./AddAge/UserAge";
import "./User.css";

const User = () => {
  return (
    <div className="container">
      <div className="UserCadaster-container">
        <UserName />
        <Password />
        <button className="addUser-button">Add User</button>
      </div>
    </div>
  );
};

export default User;
