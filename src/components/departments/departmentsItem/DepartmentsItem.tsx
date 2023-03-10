import React from "react";
import styles from "./DepartmentsItem.module.css";

interface IDepartmentsItem {
  address: string;
  description: string;
}

const DepartmentsItem: React.FC<IDepartmentsItem> = ({
  address,
  description,
}) => {
  return (
    <li className={styles.item}>
      <p>{address}</p>
      <p>{description}</p>
    </li>
  );
};

export default DepartmentsItem;
