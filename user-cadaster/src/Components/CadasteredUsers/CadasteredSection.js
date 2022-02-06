import React from "react";
import Cadasters from "./Cadasters";
import './CadasteredSection.css'
const UserSection = (props) => {
  const DB = props.db;
  return (
    <div className="container-cadasters">
      {DB.map((users) => {
        return <Cadasters name={users.name} age={users.age} />;
      })}
    </div>
  );
};

export default UserSection;
