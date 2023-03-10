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
      <p className={styles.short__address}>Short Address: {address}</p>
      <p className={styles.long__address}>Detail Address: {description}</p>
    </li>
  );
};

export default DepartmentsItem;
