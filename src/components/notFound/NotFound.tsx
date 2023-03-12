import React from "react";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Помилка 404. Сторінка не знайдена!</h2>
    </div>
  );
};

export default NotFound;
