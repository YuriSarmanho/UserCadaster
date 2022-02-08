import React from "react";
import Cadasters from "./Cadasters";
import "./CadasteredSection.css";
const UserSection = (props) => {
  const DB = props.db;
  return DB.length != 0 ? (
    <div className="container-cadasters">
      {DB.map((users) => {
        return <Cadasters name={users.name} age={users.age} key={users.id} />;
      })}
    </div>
  ) : (
    ""
  );
};

export default UserSection;
