import React from "react";
import UserName from "./AddName/UserName";
import Password from "./AddAge/UserAge";
import './User.css'

const User = () => {
  return (
      <div className="UserCadaster-container">
          <UserName/>
          <Password/>
          <button>Add User</button>
      </div>
  );
};

export default User;
