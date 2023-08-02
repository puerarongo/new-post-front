import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { historyActions } from "../../redux/slices/historySlice";
import FormHome from "./formHome/FormHome";
import Status from "./status/Status";
import History from "./history/History";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const consignment = useSelector((state: any) => state.consignment);

  useEffect(() => {
    if (consignment.data.TTN) {
      dispatch(historyActions.historyAdd({ TTN: consignment.data.TTN }));
    }
  }, [consignment, dispatch]);

  return (
    <section className={styles.container}>
      <FormHome />
      <div className={styles.result__section}>
        <Status consignment={consignment} />
        <History />
      </div>
    </section>
  );
};

export default Home;
