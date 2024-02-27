import React from "react";
import classes from "./button.module.css";

const Button = ({ title, children, isActive, ...props }) => {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {title}
    </button>
  );
};

export default Button;
