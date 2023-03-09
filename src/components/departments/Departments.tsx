import React from "react";
import styles from "./Departments.module.css";
import Form from "../home/form/Form";

const Departments: React.FC = () => {
  return (
    <div className={styles.container}>
      <Form />
      <div className={styles.container__result}>
        <div className={styles.container__into}>D</div>
      </div>
    </div>
  );
};

export default Departments;
