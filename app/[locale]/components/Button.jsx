import React from "react";
import "../styles/Button.scss";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="my_button">{text}</button>
    </>
  );
};

export default Button;
