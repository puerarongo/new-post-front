import React from "react";
import styles from "./Home.module.css";
import FormHome from "./formHome/FormHome";
import Status from "./status/Status";
import History from "./history/History";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <FormHome />
      <div className={styles.result__section}>
        <Status />
        <History />
      </div>
    </div>
  );
};

export default Home;
