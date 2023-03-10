import React from "react";
import styles from "./Home.module.css";
import FormHome from "./formHome/FormHome";
import Status from "./status/Status";
import History from "./history/History";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const consignment = useSelector((state: any) => state.consignment);
  console.log(consignment);

  return (
    <div className={styles.container}>
      <FormHome />
      <div className={styles.result__section}>
        <Status consignment={consignment} />
        <History />
      </div>
    </div>
  );
};

export default Home;
