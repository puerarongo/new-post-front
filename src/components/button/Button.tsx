import React from "react";
import styles from "./Button.module.css";

interface IButton {
  text: String;
}

const Button: React.FC<IButton> = ({ text }) => {
  return (
    <>
      <button className={styles.button} type="submit">
        {text}
      </button>
    </>
  );
};

export default Button;
