import React from "react";
import styles from "./Status.module.css";

const Status: React.FC = () => {
  return <div className={styles.container}>
    <div className={styles.status__container}></div>
  </div>;
};

export default Status;
