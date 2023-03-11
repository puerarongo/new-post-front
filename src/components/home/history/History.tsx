import React from "react";
import styles from "./History.module.css";
import { useSelector } from "react-redux";

const History: React.FC = () => {
  const history = useSelector((state: any) => state.history.history);

  console.log("in history", history);

  return (
    <div className={styles.container}>
      <div className={styles.history__container}>
        <h2 className={styles.title}>History</h2>
        {history.length > 0 ? (
          <ul className={styles.history__list}>
            {history.map((el: string, index: number) => {
              return (
                <li className={styles.history__item} key={index}>
                  <p className={styles.item__text}>{el}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles.subtitle}>
            You don't have an consignment viewer history yet
          </p>
        )}
      </div>
    </div>
  );
};

export default History;
