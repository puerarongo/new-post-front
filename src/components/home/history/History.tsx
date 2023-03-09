import React from "react";
import styles from "./History.module.css";

const History: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.history__container}>
        <h2 className={styles.title}>History</h2>
      </div>
    </div>
  );
};

export default History;
