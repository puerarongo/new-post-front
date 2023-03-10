import React from "react";
import styles from "./Departments.module.css";
import FormDepartments from "./formDepartments/FormDepartments";
import { useSelector } from "react-redux";

const Departments: React.FC = () => {
  const place = useSelector((state: any) => state.place);
  console.log(place);

  return (
    <div className={styles.container}>
      <FormDepartments />
      <div className={styles.container__result}>
        <div className={styles.container__into}>D</div>
      </div>
    </div>
  );
};

export default Departments;
