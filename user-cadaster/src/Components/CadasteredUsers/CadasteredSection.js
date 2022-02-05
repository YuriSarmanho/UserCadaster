import React from "react";
import Cadasters from "./Cadasters";

const UserSection = (props) => {
  const DB = props.db;
  return (
    <div>
      {DB.map((users) => {
        return <Cadasters name={users.name} age={users.age} />;
      })}
    </div>
  );
};

export default UserSection;
