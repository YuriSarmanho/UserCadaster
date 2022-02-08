import React from "react";
import Button from "../Button/Button";
import './Modal.css'

const Modal = (props) => {
  return (  
    <>
      <div className="backdrop"/>
      <div className="modal">
        <header >
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button type={'button'}>Ok</Button>
        </footer>
      </div>
    </> 
  );
};

export default Modal;
