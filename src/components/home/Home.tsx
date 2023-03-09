import React from "react";
import styles from "./Home.module.css";
import Form from "./form/Form";
import Status from "./status/Status";
import History from "./history/History";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Form />
      <div className={styles.result__section}>
        <Status />
        <History />
      </div>
    </div>
  );
};

export default Home;
