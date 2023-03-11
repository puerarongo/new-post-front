import React from "react";
import styles from "./Button.module.css";

interface IButton {
  text: String;
  type: "submit" | "button" | "reset";
}

const Button: React.FC<IButton> = ({ text, type }) => {
  return (
    <>
      <button className={styles.button} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;
